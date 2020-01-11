var db = require("../models");

module.exports = function (app) {

    app.post("/api/signin", (req, res) => {
        console.log(req.body)
        db.users.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    })

    app.post("/api/signup", (req, res) => {
        db.users.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mob_no: req.body.mob_no,
            email_id: req.body.email_id,
            username: req.body.username,
            password: req.body.password,
            favorite_games: req.body.favorite_games,
            food_allergies: req.body.food_allergies,
            drink_preferences: req.body.drink_preferences,
            board_games_owned: req.body.board_games_owned
        }).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

    app.get("/profile", function (req, res) {
        //  app.get("/:id", function(req, res) {
        db.users.findOne({
            where: {
                username: "test",
                password: "123"
            }
        }).then(function (data) {
            res.render("profile", data.dataValues);
        })
    });

    app.get("/team", function (req, res) {
        //  app.get("/:id", function(req, res) {
        db.users.findAll({})
            .then(function (data) {
                console.log({ users: data });
                res.render("team", { users: data });
            })
    });


};