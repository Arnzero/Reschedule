const express = require('express')
const router = express.Router()
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')
// don't forget to implement /:id/edit and for 'put', 'DELETE', 'get'

// GET week index -- shows my week
router.get('/', (req, res) => {
    res.render('weekTasks/index.ejs')
})

// GET create week task
router.get('/new', (req, res) => {
    res.render('weekTasks/new.ejs')
})
    // POST create week task
 router.post('/', async (req, res) => {
     res.send("Posted new week task!")
 })   
// GET view a specific task
router.get('/:id', (req, res) => {
    res.render('weekTasks/show.ejs')
})

// GET a task to edit FORM
router.get('/:id/edit', (req, res) => {
    res.render('weekTasks/edit.ejs')
})
    // PUT update a task 
router.put('/:id', async (req, res) => {
    res.send("Updated week task!")
})

    //remove a task
router.delete('/:id', async (req, res) => {
    res.send("deleted week task!")
})


module.exports = router