const express = require('express');
const router = express.Router();
const path = require('path')

// HTML get request 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// set default to home when there is no matching route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;