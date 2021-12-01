// const express = require('express');
// const router = express.Router();

// const Car = require('../models/Car');


// // GET CAR
// router.get("/", async (req, res) => {
//     const cars = await Car.find()
//     try {
//         if (cars.length === 0) {
//             return res.status(400).json({message: "Didn't find any car"});
//         }
//         return res.status(200).json(cars);
//     } catch (error) {
//         return res.status(500).json({message: "Something went wrong with the server"})
//     }
// });


// // GET CAR
// router.get("/car/:id", async (req, res) => {
//     const { id } = req.params;
//     const car = await Car.findById(id).populate("user")
//     try {
//         return res.status(200).json(car)
//     } catch (error) {
//         return res.status(500).json({message: "Couldn't get the car"})
//     }
// })

// // POST CAR
// router.post("/car", async (req, res) => {
//     const carToCreate = await Car.create(req.body);
//     try {
//         return res.status(201).json(carToCreate);
//     } catch (error) {
//         return res.status(500).json({message: "Couldn't create the car"})
//     }
// });


// // PUT CAR-MAKER (UPDATE SAVED CAR-MAKER)
// router.put("/car/:id", async (req, res) => {
//     const { id } = req.params;
//     const carUpdate = await Car.findByIdAndUpdate(id, req.body, {new: true});
//     try {
//         return res.status(202).json(carUpdate);
//     } catch (error) {
//         return res.status(500).json({message: "Couldn't update the car"})
//     }
// });


// module.exports = router;

