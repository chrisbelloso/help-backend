const express = require('express');
const router = express.Router();

const Car = require('../models/Car');


// GET CAR
router.get("/", async (req, res) => {
    const cars = await Car.find()
    try {
        if (cars.length === 0) {
            return res.status(400).json({message: "Didn't find any car"});
        }
        return res.status(200).json(cars);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong with the server"})
    }
});



// PUT CAR-MAKER (UPDATE SAVED CAR-MAKER)
router.put("/car/:id", async (req, res) => {
    const { id } = req.params;
    const carMakerUpdate = await Car.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(carMakerUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update the car maker"})
    }
});


// PUT CAR-TYPE (UPDATE SAVED CAR-TYPE)
router.put("/car/:id", async (req, res) => {
    const { id } = req.params;
    const carTypeUpdate = await Car.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(carTypeUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update the car type"})
    }
});

// PUT CAR-COLOR (UPDATE SAVED CAR-COLOR)
router.put("/car/:id", async (req, res) => {
    const { id } = req.params;
    const carColorUpdate = await Car.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(carColorUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update car"})
    }
});

