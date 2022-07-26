// const db = require("../db/db.json")
const path = require('path');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();

// Get
router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            return res.json(notes);
        }
    });
});

// POST
router.post("/api/notes", (req, res) => {
    let noteDB = fs.readFileSync('./db/db.json');
    noteDB = JSON.parse(noteDB)
    res.json(noteDB)
    // Create note body
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        // 
        id: uuidv4(),
    }
    noteDB.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(noteDB, null, 4));
    res.json(newNote)
});

router.delete("/api/notes/:id", (req, res) => {
    let deleteDB = fs.readFileSync('./db/db.json')
    deleteDB = JSON.parse(deleteDB)
    let deleteNote = deleteDB.filter((e) => {
        return e.id != req.params.id
    })
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote, null, 4));
    res.json(deleteNote)
})

module.exports = router;