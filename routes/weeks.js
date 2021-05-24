const express = require('express')
const router = express.Router()
// models go here


// GET week index -- shows my week
router.get('/', (req, res) => {
    res.render('week/index.ejs')
})

// GET create week task
router.get('/new', (req, res) => {
    res.render('week/new.ejs')
})
    // POST create week task
    
// GET view a specific task
router.get('/show', (req, res) => {
    res.render('week/show.ejs')
})

// GET a task to edit FORM
router.get('/edit', (req, res) => {
    res.render('week/edit.ejs')
})
    // PUT update a task 


    //remove a task



module.exports = router