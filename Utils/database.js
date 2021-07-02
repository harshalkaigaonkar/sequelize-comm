const Sequelize = require('sequelize');

const sequelize = new Sequelize("examsoftware", "Harshal", 'harshal@12345', {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize;