<template>
  <div class="container-fluid">
    <div class="row">
      <div id="sidebar" class="col-lg-3 offset-lg-1">
        <!-- section home -->
        <section id="home" class="home d-flex light align-items-center">
          <div class="container">
            <!-- intro -->
            <div class="intro">
              <!-- avatar image -->
              <img
                src="./assets/images/memoji.png"
                alt="Profile picture"
                class="rounded-circle"
              />

              <!-- info -->
              <h1 class="mb-2 mt-0">Aleksandar Jelić</h1>
              <span>Web Developer</span>

              <ul class="social-icons light list-inline mb-0 mt-4">
                <li class="list-inline-item">
                  <a target="_blank" href="https://www.linkedin.com/in/aleksandar-jeli%C4%87-b0445b76/">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a target="_blank" href="https://github.com/seniorescobar">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a target="_blank" href="mailto:aleksandar@jelic.email">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div class="col-lg-7 offset-lg-4">
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
  </div>
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

<style lang="scss" scoped>
@import 'node_modules/bootstrap/scss/bootstrap';

@include media-breakpoint-up(lg) {
	#sidebar {
		position: fixed;
	}
}

img {
	width: 320px;
}
</style>