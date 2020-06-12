const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.route("/").get((req,res) =>{
   User.find() 
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error : ' + err));
});

router.route("/add").post((req,res) => {
    const username = req.body.username;

    const newUser = new User({
        username
    });

    newUser.save()
    .then(() => res.json("User successfully added . "))
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;