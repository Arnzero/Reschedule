const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('Task', taskSchema)