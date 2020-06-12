const express = require("express");
const router = express.Router();

const Exercise = require("../models/exercise.model");

router.route("/").get((req,res) =>{
   Exercise.find() 
   .then(exercise => res.json(exercise))
   .catch(err => res.status(400).json('Error : ' + err));
});

router.route("/add").post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json("Exercise successfully added . "))
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;