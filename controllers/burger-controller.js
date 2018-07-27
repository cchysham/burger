var Burgers = require("../models/burger");
var express = require("express");

var router = express.Router();


router.get("/", function (req, res) {
    Burgers.findAll({}).then(function (results) {
        var hbsObject = {
            burgers: results
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    Burgers.create({
        burger_name: req.body.name,
    }).then(function (results) {
        res.render("index", results);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    Burgers.update({
        devoured: true
    }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
});


module.exports = router;