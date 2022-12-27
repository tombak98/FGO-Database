const router = require('express').Router()
const Card = require('../db/Card')

router.get('/all', async(req,res,next) => {
    try {
        const allCards = await Card.findAll()
        res.send(allCards)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async(req,res,next) => {
    try {
        const single = await Card.findOne({
            where: {
                id: req.params.id
            }
        })
        res.send(single)
    } catch(err) {
        next(err)
    }
})

module.exports = router