<template>
  <div>
    <section id="landing">
      <section class="jumbotron text-center position-relative">
        <img
          src="../assets/contact/contact-jumbo.png"
          alt="Contact Jumbo Image"
          class="img-fluid jumbo-img"
        />
        <div class="overlay-text">
          <h1 class="display-4 ibm-plex-serif-medium">CONTACT US</h1>
        </div>
      </section>

      <section id="section1" class="section-container">
        <div class="text-center section-block">
          <h2 class="section-title ibm-plex-serif-medium">
            Contáctanos y di ciao!
          </h2>
          <p class="section-text montserrat-body">“Reach Out and Say Ciao!”</p>
        </div>
      </section>
    </section>

    <section class="section-container contact-section">
      <div class="text-center section-block">
        <h3 class="section-title ibm-plex-serif-medium">
          Get in Touch with Al Forno
        </h3>
      </div>

      <div class="row contact-block">
        <div class="col-md-6 contact-form-container">
          <form @submit.prevent="submitForm" class="custom-contact-form">
            <div class="form-group">
              <label for="name" class="montserrat-body contact-form-label"
                >Name:</label
              >
              <input
                v-model="name"
                type="text"
                id="name"
                class="form-control contact-input"
                required
              />
            </div>
            <div class="form-group">
              <label for="email" class="montserrat-body contact-form-label"
                >Email:</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                class="form-control contact-input"
                required
              />
            </div>
            <div class="form-group">
              <label for="comments" class="montserrat-body contact-form-label"
                >Questions/Comments:</label
              >
              <textarea
                v-model="comments"
                id="comments"
                class="form-control contact-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              id="contactBtn"
              type="submit"
              class="btn btn-primary contact-submit-btn montserrat-body"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <div class="col-md-6 contact-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.852699754176!2d120.5805796!3d15.1664321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b12cc59329%3A0x791044cf0c580e20!2sAl%20Forno%20by%20the%20Veranda!5e0!3m2!1sen!2sph!4v1729863601470!5m2!1sen!2sph"
            width="600"
            height=""
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="contact-info text-center mt-4">
        <div class="contact-info-item montserrat-body">
          <i class="fas fa-map-marker-alt"></i> Unit B1 2nd Floor Tower 1, Clark
          City Front Mall
        </div>
        <div class="contact-info-item montserrat-body">
          <i class="fas fa-envelope"></i> alfornopampanga@gmail.com
        </div>
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
      name: "",
      email: "",
      comments: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.name}! Your message has been sent.`);

      this.name = "";
      this.email = "";
      this.comments = "";
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

#contactBtn {
  margin-left: auto;
  margin-right: auto;
}

.contact-section {
  padding: 2.25rem 0;
}

.contact-block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
}

.contact-form-container {
  width: 100%;
  max-width: 375px;
}

.custom-contact-form .form-group {
  margin-bottom: 1.125rem;
}

.contact-form-label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
}

.contact-input,
.contact-textarea {
  width: 100%;
  padding: 0.5625rem;
  font-size: 0.75rem;
  border-radius: 3.75px;
  border: 1px solid #ddd;
}

.contact-submit-btn {
  display: block;
  width: 100%;
  background-color: #333;
  color: white;
  font-size: 0.9rem;
  padding: 0.5625rem;
  border-radius: 3.75px;
}

.contact-submit-btn:hover {
  background-color: #555;
}

.contact-map-container iframe {
  width: 100%;
  height: 49vh;
  border-radius: 3.75px;
  border: none;
}

.contact-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.75rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.9rem;
}

.contact-info-item i {
  font-size: 1.125rem;
  margin-top: 5em;
  color: #333;
}

footer {
  background-color: #333;
  color: white;
  padding-top: 1.125em;
  padding-bottom: 0.75em;
}
</style>
