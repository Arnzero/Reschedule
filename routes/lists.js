const express = require('express')
const router = express.Router()
// models go here

router.get('/', (req, res) => {
    res.send("This is our lists page")
})

module.exports = router