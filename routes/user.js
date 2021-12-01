const express = require('express');
// const Contact = require('../models/Contact');
const router = express.Router();
const User = require('../models/User')


// GET USER
router.get("/", async (req, res) => {
    const user = await User.find()
        .populate("contacts");
    try {
        if (user.length === 0) {
            return res.status(400).json({message: "Didn't find any users"});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong with the server"});
    }
});

// GET USER BY ID
router.get("/user/:id", async (req, res) => {
    const {id } = req.params;
    const user = await User.findById(id).populate("contacts");
    try {
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the user"})
    }
});


// PUT USER
router.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    const userToUpdate = await User.findById(id);
    const { contacts } = userToUpdate; // contacts = userToUpdate.contacts;
    const { contactId } = req.body;
    contacts.push(contactId);
    userToUpdate.contacts = contacts;
    userToUpdate.save();
    try {
        return res.status(202).json(userToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update user"})
    }
});

module.exports = router;