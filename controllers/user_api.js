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

    app.post("/api/signup", (req, res) => {
        db.users.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mob_no: req.body.mob_no,
            email_id: req.body.email_id,
            username: req.body.username,
            password: req.body.password
        }).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

};