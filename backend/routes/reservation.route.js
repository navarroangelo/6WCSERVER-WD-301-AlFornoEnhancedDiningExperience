const express = require("express");
const reservationRoute = express.Router();
let ReservationModel = require("../models/Reservation.js"); // Assuming this model is properly defined

// Create a new reservation
reservationRoute.route("/create-reservation").post(async (req, res, next) => {
  try {
    const data = await ReservationModel.create(req.body);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get all reservations
reservationRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await ReservationModel.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get a specific reservation by ID
reservationRoute.route("/edit-reservation/:id").get(async (req, res, next) => {
  try {
    const data = await ReservationModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Update a reservation
reservationRoute
  .route("/update-reservation/:id")
  .put(async (req, res, next) => {
    try {
      const data = await ReservationModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(data);
      console.log("Reservation successfully updated!");
    } catch (error) {
      return next(error);
    }
  });

// Delete a reservation
reservationRoute
  .route("/delete-reservation/:id")
  .delete(async (req, res, next) => {
    try {
      const data = await ReservationModel.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json({ msg: "Reservation not found" });
      }
      res.status(200).json({ msg: "Reservation deleted successfully", data });
    } catch (error) {
      return next(error);
    }
  });

module.exports = reservationRoute;
