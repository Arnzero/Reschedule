if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const profileRouter = require('./routes/profiles')
const listsRouter = require('./routes/lists')
const tasksRouter = require('./routes/tasks')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

//app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,
     { useNewUrlParser: true, useUnifiedTopology: true  })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console. log("Connected to Mongoose"))

//In order for register/login to avoid
// layouts, we placed it beforehand
// all the register/login POST is in route index.js

// GET register form (moved to server.js)
app.get('/register', (req, res) => {
   res.render('profiles/register.ejs')
})

// GET login form (moved to server.js)
app.get('/login', (req, res) => {
    res.render('profiles/login.ejs')
 })


// GET logout
app.get('/logout', (req, res) => {
    //delete token session
    res.render('profiles/login.ejs')
})


// GET home
app.get('/home', (req, res) => {
    res.redirect('/')
})

// GET about
app.get('/about', (req, res) => {
    res.render('footers/about.ejs')
})

// GET contacts
app.get('/contacts', (req, res) => {
    res.render('footers/contacts.ejs')
})

app.use(expressLayouts)
app.use('/', indexRouter)
app.use('/profile', profileRouter) // SINGULAR for convention
app.use('/lists', listsRouter)
app.use('/tasks', tasksRouter)

/*
app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
})
*/

// http://localhost:3000
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on fixed port: ", "3000")
})