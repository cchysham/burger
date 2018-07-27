var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("Burgers", {
    id: {
       type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   burger_name: Sequelize.STRING,
   devoured: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
   }
});

Burgers.sync();

module.exports = Burgers;
