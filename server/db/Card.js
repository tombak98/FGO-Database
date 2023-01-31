const Sequelize = require('sequelize')
const db = require('./database.js')

const Card = db.define('card', {
    name: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.TEXT
    },
    class: {
        type: Sequelize.STRING
    },
    deck: {
        type: Sequelize.STRING
    },
    atk: {
        type: Sequelize.INTEGER
    },
    hp: {
        type: Sequelize.INTEGER
    },
    skills: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    }
})

module.exports = Card