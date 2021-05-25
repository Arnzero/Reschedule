const express = require('express')
const router = express.Router()
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')

router.get('/', (req, res) => {
    res.render('errandTasks/index.ejs')
})

// GET create misc. task
router.get('/new', (req, res) => {
    res.render('errandTasks/new.ejs')
})
    // POST create misc. task
    
// GET show a specific misc. task
router.get('/show', (req, res) => {
    res.render('errandTasks/show.ejs')
})

// GET a task to edit FORM
router.get('/edit', (req, res) => {
    res.render('errandTasks/edit.ejs')
})
    // PUT update a task 


    //remove a task


module.exports = router