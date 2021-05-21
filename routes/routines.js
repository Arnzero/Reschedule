const express = require('express')
const router = express.Router()
// models go here

router.get('/', (req, res) => {
    res.send("This is our routines page")
})

module.exports = router