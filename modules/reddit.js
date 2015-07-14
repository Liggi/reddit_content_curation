var http = require("http");

module.exports = function () {

  const REDDIT_URL = "www.reddit.com";

  function links_by_domain(domain, callback) {
    return http.get({
      host: REDDIT_URL,
      path: "/domain/theguardian.com/top.json?sort=top&t=week"
    }, function(res) {
      var body = "";
      res.on('data', function (data) {
        body += data;
      });
      res.on('end', function () {
        var parsed = JSON.parse(body);
        callback(parsed.data.children);
      });
    });
  }

  return {
    links_by_domain: links_by_domain
  }

}
