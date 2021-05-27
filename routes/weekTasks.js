const express = require('express')
const router = express.Router()
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')
// don't forget to implement /:id/edit and for 'put', 'DELETE', 'get'

// GET week index -- shows my week
router.get('/', async(req, res) => {
    try {

        let allWeekTasks = await CommTask.find({}).limit(10).exec()
    
        res.render('weekTasks/index.ejs', {
            weekTasks: allWeekTasks
        })
    }catch {
        res.render('weekTasks/index.ejs', {
            errorMessage: "Cannot load week tasks"
        })
    }
})

// GET create week task
router.get('/new', (req, res) => {
    res.render('weekTasks/new.ejs')
})
    // POST create week task
 router.post('/', async (req, res) => {
     //res.send("Posted new week task!")
     // this function need to loop depending
     // on how many days it was clicked, up to 7!
     const weekTask = new CommTask({
         dayOfWeek: "sunday",
         subTask1: req.body.subTask1,
         subTask2: req.body.subTask2,
         subTask3: req.body.subTask3,
         startTime: req.body.startTime,
         startPeriod: req.body.startPeriod,
         finishTime: req.body.finishTime,
         finishPeriod: req.body.finishPeriod,
         profile: "60ad846e27d2e8391c5272cd"
     })
     try {
        await weekTask.save()        
        res.redirect('/weekTasks/')
     } catch(err) {
         console.log(err)
        res.render('weekTasks/new', {
            weekTask: weekTask,
            errorMessage: 'Error creating week task!'
        })
     }

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