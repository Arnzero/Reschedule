const mongoose = require('mongoose')

const commTaskSchema = mongoose.Schema({
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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    taskHrs: {
        type: Number,
        required: true
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