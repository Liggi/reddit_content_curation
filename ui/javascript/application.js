var REDDIT_URL = "https://www.reddit.com/";
var added_articles = [];

function by_behaviour(selector) {
  return $('[data-behaviour=' + selector + ']');
}

function init() {
  by_behaviour('search').on('click', search);
}

function search() {
  var domain = by_behaviour('domain-entry').val().trim().toLowerCase();
  var period = by_behaviour('period').val();

  $.ajax({
    url: REDDIT_URL + "domain/" + domain + '/top.json?sort=top&t=' + period,
    dataType: 'json',
    success: add_results,
    error: function() {
      alert("You dun goofed!");
    }
  });
}

function add_results(results) {
  var container = by_behaviour('articles-list');
  container.empty();

  results.data.children.forEach(function (element, index, array) {
    if(!article_exists(element)) {
      added_articles.push(element);

      var node = $('<a href="' + element.data.url + '" data-thread-id="' + element.data.id + '">' + element.data.title + '</a>').appendTo(by_behaviour('articles-list'));
    }
  });

  add_insights();
}

function add_insights() {
  added_articles.forEach(function(element, index, array) {
    parse_comments(element);
  });
}

function parse_comments(element) {
  $.ajax({
    url: REDDIT_URL + "r/" + element.data.subreddit + "/comments/" + element.data.id + ".json?sort=top",
    dataType: 'json',
    success: add_insight,
    error: function () {
      alert('error');
    }
  });
}

function add_insight(results) {
  if(results[1].data.children.length > 0) {
    $('[data-thread-id=' + results[0].data.children[0].data.id + ']').after('<p>' + results[1].data.children[0].data.body + ' </p><br /><br />');
  }
}

function article_exists(element) {
  var url = element.data.url;
  return added_articles.indexOf(url) != -1;
}

$(function() {
  init();
});
