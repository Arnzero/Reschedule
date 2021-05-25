const express = require('express')
const router = express.Router()
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')

// All errands route
router.get('/', (req, res) => {
    res.render('errandTasks/index.ejs')
})

// GET create misc. task
router.get('/new', (req, res) => {
    res.render('errandTasks/new.ejs')
})
    // POST create misc. task
router.post('/', async (req, res) => {
    res.send("created errand task!")
})
    
// GET show a specific misc. task
router.get('/:id', (req, res) => {
    res.render('errandTasks/show.ejs')
})

// GET a task to edit FORM
router.get('/:id/edit', (req, res) => {
    res.render('errandTasks/edit.ejs')
})
    // PUT update a task 
router.put('/:id', async (req, res) => {
    res.send("updated errand task")
})

    //remove a task
router.delete('/:id', async (req, res) => {
    res.send("deleted errand task")
})

module.exports = router