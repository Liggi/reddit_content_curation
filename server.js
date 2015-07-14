var express = require("express"),
    exphbs = require("express-handlebars"),
    bodyParser = require("body-parser"),
    reddit = require("./modules/reddit")();
    //db = require("mongojs").connect("reddit-news", [ "articles" ]);

var app = express();

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded());

app.get('/', function(req, res, next) {
  reddit.links_by_domain("", function (result) {
    res.render('home', { articles: result });
  });
});

app.listen(5555);
