<template>
  <!-- desktop header -->
  <header class="desktop-header-3 light fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-target="#navbarNavDropdown"
          data-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto scrollspy">
            <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="#experience" class="nav-link">Experience</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <!-- main layout -->
  <main class="content-3">
    <!-- section home -->
    <section id="home" class="home d-flex light align-items-center">
      <div class="container">
        <!-- intro -->
        <div class="intro">
          <!-- avatar image -->
          <img
            src="./assets/images/avatar-2.svg"
            alt="Bolby"
            class="mb-4"
          />

          <!-- info -->
          <h1 class="mb-2 mt-0">Aleksandar Jelić</h1>
          <span
            >I'm a
            <span class="text-rotating"
              >Web Developer</span
            ></span
          >

        </div>

      </div>
    </section>

    <!-- section about -->
	<AboutMe/>

    <!-- section experience -->
	<Experience/>

    <footer class="footer light">
      <div class="container">
        <span class="copyright">© 2020 TODO</span>
      </div>
    </footer>
  </main>
</template>

<script>
import AboutMe from './views/AboutMe.vue'
import Experience from './views/Experience.vue'

export default {
	components: {
		AboutMe,
		Experience,
	}
}
</script>