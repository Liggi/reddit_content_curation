var RED = window.RED || {};
RED.loadPosts = function(){
  var domains, posts = [];
  function init(data){
    domains = data.domains;
    domains.forEach(getPosts);
  }

  function getPosts(domain, index){
    $.ajax({
      url: 'https://www.reddit.com/domain/' + domain + '/top.json?sort=top&t=week',
      success: function(result){
        addPosts(result.data.children);

        if(index >= domains.length - 1){
          sortPosts();
          createPosts();
        }
      }
    });
  }

  function addPosts(domainPosts){
    domainPosts.forEach(function(post){
      posts.push(post.data);
    });
  }

  function sortPosts(){
    var prop = 'created';
    posts = posts.sort(function(a, b){
      return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    });
  }

  function createPosts(){
    posts.forEach(function(post){
      $(RED.templates.post(post)).appendTo(bh('posts')).inView();
    });
  }

  return {
    init: init
  }
}();