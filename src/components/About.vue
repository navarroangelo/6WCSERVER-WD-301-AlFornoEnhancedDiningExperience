<template>
  <div>
    <section id="landing">
      <section class="jumbotron text-center position-relative">
        <img
          src="../assets/about/about-jumbo.png"
          alt="About Jumbo Image"
          class="img-fluid jumbo-img"
        />
        <div class="overlay-text">
          <h1 class="display-4 ibm-plex-serif-medium">ABOUT</h1>
        </div>
      </section>

      <section id="section1" class="section-container">
        <div class="text-center section-block">
          <h2 class="section-title ibm-plex-serif-medium">
            SCORPI DI PIU SU DI NOI
          </h2>
          <p class="section-text montserrat-body">“Know More About Us”</p>
        </div>
      </section>
    </section>

    <section id="section2" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6">
          <img
            src="../assets/about/about-history.png"
            alt="History Image"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-md-6">
          <h3 class="section-title ibm-plex-serif-medium">HISTORY</h3>
          <p class="section-text montserrat-body">
            Al Forno is Italian for "from the oven" or "baked in the oven." Al
            Forno by The Veranda was born from a passion for authentic Italian
            cuisine. Founded with the goal of offering traditional dishes, the
            restaurant has become a reference point for those seeking genuine
            flavors in an elegant and cozy atmosphere.
            <br />
            <br />
            Nestled in the scenic Clark City Front Mall, Al Forno brings the
            rich culinary heritage of Italy to the heart of Pampanga. With a
            focus on using the finest, freshest ingredients, our chefs craft
            each dish with care, from our classic wood-fired pizzas to our
            handmade pastas. Every meal is a celebration of Italian
            craftsmanship, blending time-honored recipes with a modern touch.
          </p>
        </div>
      </div>
    </section>

    <section id="section3" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6">
          <h3 class="section-title text-end ibm-plex-serif-medium">
            EXPERIENCE A UNIQUE DINING MOMENT
          </h3>
          <p class="section-text montserrat-body text-end">
            At Al Forno by The Veranda, every meal is more than just food, it’s
            an experience. Whether you're enjoying a leisurely dinner in our
            elegant indoor dining area or taking in the refreshing breeze on the
            open veranda, the atmosphere is designed to help you unwind and
            savor each moment. The soft lighting, intimate setting, and
            welcoming staff make it the perfect place to escape the everyday
            rush.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/about/about-experience.png"
            alt="Experience Image"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </section>

    <section id="section4" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6">
          <img
            src="../assets/about/about-culinary.png"
            alt="Culinary Image"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-md-6">
          <h3 class="section-title ibm-plex-serif-medium">
            CULINARY EXCELLENCE
          </h3>
          <p class="section-text montserrat-body">
            The cuisine is a celebration of elegance and top-notch
            craftsmanship, where every dish is an exquisite masterpiece. With a
            focus on high-quality, fresh ingredients, each plate showcases the
            sophistication of Italian culinary traditions while delivering an
            unforgettable dining experience. Guests are invited to indulge in
            flavors that are as refined as the atmosphere, making every visit a
            luxurious affair.
          </p>
        </div>
      </div>
    </section>

    <section class="customer-reviews-container">
      <div class="text-center customer-reviews-block">
        <h3 class="section-title ibm-plex-serif-medium">CUSTOMER REVIEWS</h3>
        <div class="review-row">
          <div class="review-card">
            <img
              src="../assets/about/about-review1.png"
              alt="Review 1"
              class="review-img"
            />
            <h4 class="review-name">Mico Eldrige Cuenco</h4>
            <p class="review-text montserrat-body">
              Alforno serves authentic Italian dishes with rich flavors and
              fresh ingredients. Their lasagna is a must-try! Wonderful ambiance
              and excellent service. Highly recommended for a delightful dining
              experience.
            </p>
          </div>
          <div class="review-card">
            <img
              src="../assets/about/about-review2.png"
              alt="Review 2"
              class="review-img"
            />
            <h4 class="review-name">Marcel Angelo Navarro</h4>
            <p class="review-text montserrat-body">
              Great spot for Italian food! The pizza’s got that perfect
              wood-fired crunch, and the pasta’s on point. Solid service and a
              chill atmosphere. Definitely coming back for more.
            </p>
          </div>
          <div class="review-card">
            <img
              src="../assets/about/about-review3.png"
              alt="Review 3"
              class="review-img"
            />
            <h4 class="review-name">Franchesca Sison</h4>
            <p class="review-text montserrat-body">
              Alforno serves authentic Italian dishes with rich flavors and
              fresh ingredients. Their lasagna is a must-try! Wonderful ambiance
              and excellent service. Highly recommended for a delightful dining
              experience.
            </p>
          </div>
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
  name: "About",
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

#section3 img {
  width: 30em;
  height: 30em;
  object-fit: cover;
  float: left;
}

#section4 img {
  width: 30em;
  height: 30em;
  object-fit: cover;
  float: right;
}

#section4 .section-text {
  margin-bottom: 6em;
}

.customer-reviews-container {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.customer-reviews-container .section-title {
  margin-bottom: 1em;
}

.customer-reviews-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.customer-reviews-block {
  padding: 30px 0;
}

.review-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.review-card {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  max-width: 100%;
  flex-basis: 100%;
}

.review-card:hover {
  transform: translateY(-10px);
}

.review-img {
  width: 100%;
  height: auto;
  max-width: 25em;
  object-fit: cover;
  margin-bottom: 15px;
}

.review-name {
  font-family: "IBM Plex Serif", serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.review-text {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  padding: 0 10px;
}

@media (min-width: 768px) {
  .review-card {
    flex-basis: 48%;
    max-width: 48%;
  }
}

@media (min-width: 992px) {
  .review-card {
    flex-basis: 30%;
    max-width: 30%;
    padding: 30px;
  }
}

footer {
  background-color: #333;
  color: white;
  padding-top: 1.125em;
  padding-bottom: 0.75em;
}
</style>
