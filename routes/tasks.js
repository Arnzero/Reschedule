const express = require('express')
const router = express.Router()
// models go here

router.get('/', (req, res) => {
    res.render('tasks/index.ejs')
})

// GET create misc. task
router.get('/new', (req, res) => {
    res.render('tasks/new.ejs')
})
    // POST create misc. task
    
// GET show a specific misc. task
router.get('/show', (req, res) => {
    res.render('tasks/show.ejs')
})

// GET a task to edit FORM
router.get('/edit', (req, res) => {
    res.render('tasks/edit.ejs')
})
    // PUT update a task 


    //remove a task


module.exports = router