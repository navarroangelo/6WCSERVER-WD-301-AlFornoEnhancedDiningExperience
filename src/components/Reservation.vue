<template>
  <div>
    <section id="landing">
      <section class="jumbotron text-center position-relative">
        <img
          src="../assets/reservation/reservation-jumbo.png"
          alt="Reservation Jumbo Image"
          class="img-fluid jumbo-img"
        />
        <div class="overlay-text">
          <h1 class="display-4 ibm-plex-serif-medium">RESERVATION</h1>
        </div>
      </section>

      <section id="section1" class="section-container">
        <div class="text-center section-block">
          <h2 class="section-title ibm-plex-serif-medium">RESERVA TU MESA</h2>
          <p class="section-text montserrat-body">“Book Your Table”</p>
        </div>
      </section>
    </section>

    <section id="section2" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6">
          <img
            src="../assets/reservation/reservation-prenota.png"
            alt="Prenota Il Tuo Tavolo Image"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-md-6">
          <h3 class="section-title ibm-plex-serif-medium">
            PRENOTA IL TUO TAVOLO
          </h3>
          <p class="section-text montserrat-body">
            Choose from our intimate indoor seating for a classic Italian
            atmosphere or enjoy the stunning views and fresh air on our veranda.
            If you have special preferences or dietary requirements, let us
            know, and we’ll take care of every detail to ensure your experience
            is perfect.
          </p>
          <button class="btn btn-primary" @click="showForm = true">
            Book Now
          </button>
        </div>
      </div>
    </section>

    <section
      id="reservationForm"
      v-if="showForm"
      class="section-container reservation-form-container"
    >
      <div class="text-center section-block">
        <h3 class="reservation-title ibm-plex-serif-medium">
          TABLE RESERVATION
        </h3>
        <p class="reservation-subtitle montserrat-body">
          Please provide accurate details for a smooth reservation process.
        </p>
        <form @submit.prevent="confirmReservation" class="reservation-form">
          <div class="form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  v-model="firstName"
                  type="text"
                  id="firstName"
                  class="form-control reservation-input"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  v-model="lastName"
                  type="text"
                  id="lastName"
                  class="form-control reservation-input"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <label for="contactNumber" class="form-label"
                  >Contact Number</label
                >
                <input
                  v-model="contactNumber"
                  type="text"
                  id="contactNumber"
                  class="form-control reservation-input"
                  placeholder="09xxxxxxxxx"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="time" class="form-label">Time</label>
                <input
                  v-model="time"
                  type="time"
                  id="time"
                  class="form-control reservation-input"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col-md-6">
              <div class="form-group">
                <label for="date" class="form-label">Date</label>
                <input
                  v-model="date"
                  type="date"
                  id="date"
                  class="form-control reservation-input"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="numberOfGuests" class="form-label"
                  >Number of Guests</label
                >
                <input
                  v-model="numberOfGuests"
                  type="number"
                  id="numberOfGuests"
                  class="form-control reservation-input"
                  placeholder="5"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary reservation-submit-btn mt-4 ibm-plex-serif-medium"
          >
            BOOK
          </button>
        </form>
      </div>
    </section>

    <section v-if="showConfirmation" class="section-container">
      <div class="text-center section-block">
        <h3 class="section-title">CONFIRMATION</h3>
        <div class="confirmation-details">
          <p><strong>First Name:</strong> {{ firstName }}</p>
          <p><strong>Last Name:</strong> {{ lastName }}</p>
          <p><strong>Contact Number:</strong> {{ contactNumber }}</p>
          <p><strong>Time:</strong> {{ time }}</p>
          <p><strong>Date:</strong> {{ date }}</p>
          <p><strong>Number of Guests:</strong> {{ numberOfGuests }}</p>
        </div>
        <div class="form-check text-left mt-4">
          <input
            type="checkbox"
            class="form-check-input"
            id="confirmationCheckbox"
            v-model="isConfirmed"
            required
          />
          <label class="form-check-label" for="confirmationCheckbox"
            >I assure that the following information is correct.</label
          >
        </div>
        <button class="btn btn-secondary mt-4" @click="editReservation">
          Edit
        </button>
        <button class="btn btn-primary mt-4" @click="finalizeReservation">
          Confirm
        </button>
      </div>
    </section>

    <section v-if="showFinalConfirmation" class="section-container">
      <div class="text-center section-block">
        <h3 class="section-title">Reservation Confirmed</h3>
        <p>Your table reservation has been booked. We’ll see you around!</p>
        <p>
          We advise you arrive 15 minutes before your scheduled reservation.
        </p>
        <router-link
          id="backBtn"
          to="/"
          class="btn btn-primary d-flex justify-content-center align-items-center"
        >
          Back to Home
        </router-link>
      </div>
    </section>

    <footer class="text-center mt-5">
      <p>&copy; 2024 Al Forno By The Veranda. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      contactNumber: "",
      time: "",
      date: "",
      numberOfGuests: 1,
      showForm: false,
      showConfirmation: false,
      showFinalConfirmation: false,
      isConfirmed: false,
    };
  },
  methods: {
    confirmReservation() {
      this.showForm = false;
      this.showConfirmation = true;
    },
    editReservation() {
      this.showConfirmation = false;
      this.showForm = true;
    },
    finalizeReservation() {
      this.showConfirmation = false;
      this.showFinalConfirmation = true;
    },
    backToHome() {
      console.log("Back to Home");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.ibm-plex-serif-medium {
  font-family: "IBM Plex Serif", serif;
  font-weight: 500;
  font-style: normal;
}

.montserrat-body {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.btn-primary {
  background-color: black;
  color: white;
}

.btn-primary:hover {
  background-color: white;
  color: black;
}

.btn {
  width: 13em;
  height: 3em;
}

#landing {
  height: 100vh;
}

.jumbotron {
  height: 65%;
}

.jumbotron img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
}

.display-4 {
  font-size: 3em;
}

#section1 .section-title {
  color: #333;
  font-size: 2.25em;
}

.section-container {
  padding: 3.75em;
  height: 22.5%;
  margin: 2.25em auto;
}

.section-title {
  text-transform: uppercase;
  font-size: 3.75em;
  margin-bottom: 0.375em;
}

.section-text {
  font-size: 0.9em;
  line-height: 1.125em;
}

#section2 {
  margin-left: auto;
  margin-right: auto;
}

#section2 img {
  width: 30em;
  height: 30em;
  object-fit: cover;
  float: right;
}

#section2 .section-text {
  margin-right: 2.25em;
  margin-bottom: 6em;
}

.reservation-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.reservation-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.reservation-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
}

.reservation-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: white;
}

.form-label {
  font-size: 1rem;
  margin-bottom: 5px;
  display: block;
  color: #333;
}

.reservation-input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-row .col-md-6 {
  width: 48%;
}

.reservation-submit-btn {
  width: 100%;
  background-color: #333;
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.reservation-submit-btn:hover {
  background-color: white;
  color: #333;
  border: 1px solid #333;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .form-row .col-md-6 {
    width: 100%;
  }
}

footer {
  background-color: #333;
  color: white;
  padding-top: 1.5em;
  padding-bottom: 1em;
}

#backBtn {
  margin-left: auto;
  margin-right: auto;
}
</style>
