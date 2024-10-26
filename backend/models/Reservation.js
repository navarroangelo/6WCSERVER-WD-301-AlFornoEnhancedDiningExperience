const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the reservation schema
let reservationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    numberOfGuests: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "reservations", // Collection name
  }
);

// Export the reservation model
module.exports = mongoose.model("Reservation", reservationSchema);
