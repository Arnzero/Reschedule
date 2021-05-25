const mongoose = require('mongoose')

const miscTaskSchema = mongoose.Schema({
    miscName: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    periodTime: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
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

module.exports = mongoose.model('MiscTask', miscTaskSchema)