const express = require('express')
const router = express.Router()
const profile = require('../models/profile')
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')

// Display Today
router.get('/', (req, res) => {
    res.render('index.ejs')
})

// GET register form (moved to server.js)


// POST register -- New User
router.post('/register', async (req, res) => {
    
    /* const profile = new Profile({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        passw: req.body.password,
    })*/
    
    try{
        //const newProfile = await profile.save()
       // res.send("Added new User!")
       res.redirect('/login')
    } catch {
        res.send("error posting new user!")
    }
})

// GET login form (moved to server.js)

// POST login -- verify user
router.post('/login', (req, res) => {
    res.redirect('/')
})

module.exports = router