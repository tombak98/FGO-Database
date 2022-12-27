// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

// YOUR DATABASE RELATIONS GO HERE

const db = require('./database')
const User = require('./User')




module.exports = {
    // Include your models in this exports object as well!
    db,
    User
}