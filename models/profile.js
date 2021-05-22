const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
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

profileSchema.pre('remove', function(next) {
    Task.find({ profile: this.id }, (err,users) => {
        if (err) {
            next(err)
          } else if (profile.length > 0) {
            next(new Error('This User has tasks still'))
          } else {
            next()
          }  
    })
})


module.exports = mongoose.model('Profile', profileSchema)