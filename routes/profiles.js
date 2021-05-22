const express = require('express')
const router = express.Router()

const Profile = require('../models/profile')


// GET profile edit form
router.get('/edit', (req, res) => {
    res.render('profiles/edit.ejs')
})

// PUT -- update profile
router.put('/:id', (req, res) => {
    res.send("Updated profile")
})


module.exports = router