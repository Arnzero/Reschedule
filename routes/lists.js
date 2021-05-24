const express = require('express')
const router = express.Router()
// models go here

router.get('/show_list', (req, res) => {
    res.render('lists/index.ejs')
})

// GET show_list


// GET list item to edit FORM

// PUT update list item

// GET a list item to create FORM
router.get('/new', (req, res) => {
    res.render('lists/new.ejs')
})

// POST a list item

router.post('/new', (req, res) => {
    res.respon("added new task")
})

module.exports = router