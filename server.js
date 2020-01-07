/**
* Module dependencies.
*/
var express = require('express')
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');
var exphbs = require("express-handlebars");
var app = express();
var bodyParser=require("body-parser");
var PORT = process.env.PORT || 3000;
var db = require("./models");

//global.db = connection;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//controllers
require("./controllers/user_api")(app);
require("./controllers/user_html")(app);

//listener

db.sequelize.sync().then(function(){
    app.listen(PORT, () => {
        console.log(`Server listening on: http://localhost:${PORT}`);
    });
});