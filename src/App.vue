<template>
  <div class="row">
    <div class="col-lg-3 offset-lg-1">
      <!-- section home -->
      <section id="home" class="home d-flex light align-items-center">
        <div class="container">
          <!-- intro -->
          <div class="intro">
            <!-- avatar image -->
            <img src="./assets/images/avatar-2.svg" alt="Bolby" class="mb-4" />

            <!-- info -->
            <h1 class="mb-2 mt-0">Aleksandar Jelić</h1>
            <span>Web Developer</span>
          </div>
        </div>
      </section>
    </div>
    <div class="col-lg-7">
      <!-- section about -->
      <AboutMe />

      <!-- section experience -->
      <Experience />
    </div>
  </div>

  <footer class="footer light">
    <div class="container">
      <span class="copyright">© 2020 TODO</span>
    </div>
  </footer>
</template>

<script>
import AboutMe from "./views/AboutMe.vue";
import Experience from "./views/Experience.vue";

export default {
  components: {
    AboutMe,
    Experience,
  },
};
</script>