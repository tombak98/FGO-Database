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
    }
})

module.exports = Card