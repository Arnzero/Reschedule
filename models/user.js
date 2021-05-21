const mongoose = require('mongoose')
const User = require('./user')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    passw: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

userSchema.pre('remove', function(next) {
    Task.find({ user: this.id }, (err,users) => {
        if (err) {
            next(err)
          } else if (users.length > 0) {
            next(new Error('This User has tasks still'))
          } else {
            next()
          }  
    })
})


module.exports = mongoose.model('User', userSchema)