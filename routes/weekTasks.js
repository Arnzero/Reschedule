const express = require('express')
const router = express.Router()
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')


// GET week index -- shows my week
router.get('/', (req, res) => {
    res.render('weekTasks/index.ejs')
})

// GET create week task
router.get('/new', (req, res) => {
    res.render('weekTasks/new.ejs')
})
    // POST create week task
    
// GET view a specific task
router.get('/show', (req, res) => {
    res.render('weekTasks/show.ejs')
})

// GET a task to edit FORM
router.get('/edit', (req, res) => {
    res.render('weekTasks/edit.ejs')
})
    // PUT update a task 


    //remove a task



module.exports = router