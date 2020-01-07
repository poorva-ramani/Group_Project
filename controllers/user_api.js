var db = require("../models");

module.exports = function (app) {

app.post("/api/signin",(req,res) => {
   console.log(req.body)
   db.users.findOne({
         where: {username: req.body.username,
            password: req.body.password
         }
      })
      .then(function(dbUsers) {
         res.json(dbUsers);
       });
}) 

    app.post("/api/users", (req, res) => {
        db.users.create({
            name: req.body.name
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

};