const mongoose = require('mongoose')

// 20 20 20
// if subtask 2 and 3 are misc

// 30 30
// if subtask 2 is misc and 3 is none

// 60
// if subtask1 is misc
//      find how many hours
//      look for next queue within this slot

const commTaskSchema = mongoose.Schema({
    dayOfWeek: {
        type: String,
        required: true
    },
    subTask1: {
        type: String,
        required: true
    },
    subTask2: {
        type: String,
        required: false
    },
    subTask3: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: true
    },
    startPeriod: {
        type: String,
        required: true
    },
    finishTime: {
        type: String,
        required: true
    },
    finishPeriod: {
        type: String,
        required: true
    },
    taskHrs: {
        type: Number,
        required: false // to do later
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Profile'
    }
})

module.exports = mongoose.model('CommTask', commTaskSchema)