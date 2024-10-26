<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="Al Forno Logo" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link montserrat-body" to="/"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link montserrat-body" to="/about"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link montserrat-body" to="/menu"
              >MENU</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link montserrat-body" to="/reservation"
              >RESERVATION</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link montserrat-body" to="/contact"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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

.logo {
  width: 10em;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  padding: 20px;
  margin-top: -2.5em;
}

.navbar .nav-link {
  color: white !important;
  font-size: 1.1rem;
  padding: 10px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5em;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-color: white;
}

.nav-item {
  margin-right: 1em;
}
</style>
