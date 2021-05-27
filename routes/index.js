const express = require('express')
const router = express.Router()
const profile = require('../models/profile')
const MiscTask = require('../models/misc_task')
const CommTask = require('../models/comm_task')

// this file is under the effect of
// layouts/layout

// 
var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";

// Display Column of Todays Common Tasks and Errands
router.get('/', async (req, res) => {
    //TODO
    var day = d.getDay()
    var today = weekday[day]
    let todayTasks
    try {
      //todayTasks = await CommTask.find({dayOfWeek:today})
      todayTasks = await CommTask.find().limit(15).exec()

    } catch {
      todayTasks = []
      errorMessage = "Error loading today tasks!"
    }
    res.render('index.ejs', {
      todayTasks: todayTasks
    })
})

// GET register form (moved to server.js)

// POST register -- New User (moved to server.js)


// GET login form (moved to server.js)

// POST login -- verify user (moved to server.js)


module.exports = router