const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
router.post('/register', async (req, res) => {
    


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        
        const newUser = await user.save()
        res.send(200).json(user)


})

router.post('/login', async (req, res) => {

    try{

        const user = await User.findOne({username: req.body.username})
        !user && res.status(404).json('username incorrectooo')
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json('password incorrect')
        
        res.send(200).json('clearance')
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router