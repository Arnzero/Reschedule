const express = require('express')
const router = express.Router()
// models go here


// GET show_week
router.get('/show_week', (req, res) => {
    res.render('tasks/show.ejs')
})

// GET a task to edit FORM

// PUT update a task 

// GET a task to create FORM

// POST new task



module.exports = router