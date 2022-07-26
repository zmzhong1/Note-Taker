const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    fs.readFile("./pets.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const pets = JSON.parse(data);
            res.json(pets);
        }
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    const newPet = {
        id: req.body.id,
        name: req.body.name,
        species: req.body.species,
        owner: req.body.owner,
    };
    fs.readFile("./pets.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const pets = JSON.parse(data);
            pets.push(newPet);
            fs.writeFile(
                "./pets.json",
                JSON.stringify(pets, null, 4),
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ data: req.body, message: "success!" });
                }
            );
        }
    });
});


module.exports = router;