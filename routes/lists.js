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

// POST a list item

module.exports = router