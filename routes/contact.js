const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

// GET CONTACT
router.get("/", async (req, res) => {
    const contacts = await Contact.find()
    try {
        if (contacts.length === 0) {
            return res.status(400).json({message: "Contact not found"})
        }
        return res.status(200).json(contacts);
    } catch (eroor) {
        return res.status(500).json({message: "Couldn't retrieve contacts"})
    }
});

// GET ALL CONTACTS from a specific user
router.get("/userFriend/:id", async (req, res) => {
    // reqpafams
    const contacts = await Contact.find({userCreator: id})
    try {
        if (contacts.length === 0) {
            return res.status(400).json({message: "Contact not found"})
        }
        return res.status(200).json(contacts);
    } catch (eroor) {
        return res.status(500).json({message: "Couldn't retrieve contacts"})
    }
});

// GET BY ID CONTACT
router.get("/contact/:id", async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id)
    try {
        return res.status(200).json(contact)
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the contact"})
    }
});


// POST CONTACT
// POST - api/v1/contacts/contact
router.post("/contact", async (req, res) => {
    const contactToCreate = await Contact.create(req.body);
    try {
        return res.status(201).json(contactToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create contact"});
    }
});

//PUT CONTACT
router.put("/contact/:id", async (req, res) => {
    const { id } = req.params;
    const contactToUpdate = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(contactToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update contact"});
    }
});


// DELETE CONTACT
router.delete("/contact/:id", async (req, res) => {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: "Couldn't delete the contact"})
    }
});

module.exports = router;