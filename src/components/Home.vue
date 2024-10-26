<template>
  <div id="templateBody">
    <section id="landing">
      <section class="jumbotron text-center position-relative">
        <img
          src="../assets/home/home-jumbo.png"
          alt="Jumbo Image"
          class="img-fluid jumbo-img"
        />
        <div class="overlay-text">
          <h1 class="display-4 ibm-plex-serif-medium">
            Al Forno By The Veranda
          </h1>
        </div>
      </section>

      <section id="section1" class="section-container">
        <div class="text-center section-block">
          <h2 class="section-title ibm-plex-serif-medium">
            Where Tradition Meets Contemporary Elegance
          </h2>
          <p class="section-text montserrat-body">
            Welcome to Al Forno by The Veranda, where we invite you to indulge
            in a delightful culinary journey. <br />
            Experience the warmth of Italian hospitality and savor our exquisite
            dishes crafted with passion.
          </p>
        </div>
      </section>
    </section>

    <section id="section2" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6">
          <img
            src="../assets/home/home-about.png"
            alt="About Image"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-md-6">
          <h3 class="section-title ibm-plex-serif-medium">
            DISCOVER OUR STORY
          </h3>
          <p class="section-text montserrat-body">
            Al Forno by The Veranda is dedicated to bringing the rich flavors of
            Italy to every dish they serve. Their passion for authentic cuisine
            and warm hospitality creates an unforgettable dining experience for
            every guest.
          </p>
          <router-link
            id="aboutBtn"
            to="/about"
            class="btn btn-primary align-middle montserrat-body d-flex justify-content-center align-items-center"
          >
            Know More About Us
          </router-link>
        </div>
      </div>
    </section>

    <section id="section3" class="section-container">
      <div class="row align-items-center section-block">
        <div class="text-center">
          <h3 class="section-title ibm-plex-serif-medium">EXPLORE OUR MENU</h3>
          <img
            src="../assets/home/home-menu.png"
            alt="Menu Image"
            class="img-fluid rounded"
          />
          <p class="section-text montserrat-body">
            Indulge in the finest Italian cuisine right here at Clark City Front
            Mall. From handcrafted pizzas made in our wood-fired oven to freshly
            prepared pastas and decadent desserts, our menu is designed to
            satisfy your cravings for authentic Italian flavors.
          </p>
          <router-link
            id="menuBtn"
            to="/menu"
            class="btn btn-primary montserrat-body d-flex justify-content-center align-items-center"
            >View Our Menu</router-link
          >
        </div>
      </div>
    </section>

    <section id="section4" class="section-container">
      <div class="row align-items-center section-block">
        <div class="col-md-6 text-end">
          <h3 class="section-title ibm-plex-serif-medium">
            RESERVE YOUR TABLE
          </h3>
          <p class="section-text montserrat-body">
            Enjoy a premium dining experience at Alforno by the Veranda, located
            in Clark City Front Mall. Whether you prefer an intimate indoor
            setting or the scenic veranda, reserve your table today and let us
            know if you have any special requests.
          </p>
          <router-link
            id="reserveBtn"
            to="/reservation"
            class="btn btn-primary montserrat-body d-flex justify-content-center align-items-center"
            >Book A Table</router-link
          >
        </div>
        <div class="col-md-6">
          <img
            src="../assets/home/home-reserve.png"
            alt="Reserve Image"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </section>

    <footer class="text-center mt-5">
      <p class="montserrat-body">
        &copy; 2024 Al Forno By The Veranda. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
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

.section-container {
  padding: 3.75em;
  height: 22.5%;
  margin: 2.25em auto;
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
  float: right;
}

#section2 .section-text {
  margin-right: 2.25em;
  margin-bottom: 6em;
}

#section3 img {
  width: 75%;
  height: 18.75em;
  margin-bottom: 2.25em;
}

#section3 .section-text {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2em;
}

#menuBtn {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

#section4 img {
  width: 30em;
  height: 30em;
  float: left;
}

#section4 .section-text {
  margin-bottom: 6em;
}

#reserveBtn {
  text-align: center;
  margin-left: auto;
  margin-right: 0;
}

footer {
  background-color: #333;
  color: white;
  padding-top: 1.125em;
  padding-bottom: 0.75em;
}
</style>
