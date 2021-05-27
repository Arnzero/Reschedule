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
   
    const errand = MiscTask({
        miscName: req.body.miscName,
        priority: req.body.priority,
        timePeriod: req.body.timePeriod,
        completed: req.body.completed,
        profile:'60ad846e27d2e8391c5272cd'
    })

    try {
        const newErrand = await errand.save()
        res.redirect('/errandTasks/')
    } catch {
        res.render('errandTasks/new', {
            errand: errand,
            errorMessage: "Error adding new errand!"
        })
    }
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