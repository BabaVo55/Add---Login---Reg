const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send('Hello user page guest!')
})

module.exports = router