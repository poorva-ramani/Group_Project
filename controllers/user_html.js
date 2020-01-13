var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/homepage");
        }
        res.redirect("/login");
    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/homepage");
        }
        res.render("index")
    });

    app.get("/homepage", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.redirect("/login");    
         } else {
            res.render("homepage",req.user);
          }
    });

    app.get("/signup", (req, res) =>
        res.render("signup")
    );

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/profile", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.redirect("/login");
        } else {
            res.render("profile", req.user);
        }
    });

    app.get("/team", (req, res) =>
        res.render("team")
    );

};
