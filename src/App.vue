<template>
  <div class="container-fluid">
    <div class="row">
      <div id="sidebar" class="col-xl-3 offset-xl-1">
        <section id="home" class="home d-flex align-items-center text-center">
          <div class="row">
            <div class="col-md-3 col-lg-12">
              <img
                src="./assets/images/memoji.png"
                alt="Profile picture"
                class="img-fluid rounded-circle mb-4"
              />
            </div>
            <div class="col-md-9 col-lg-12">
              <h1 class="text-dark mb-2 mt-0">Aleksandar Jelić</h1>
              <span>Web Developer</span>

              <ul class="social-icons list-inline mb-0 mt-2">
                <li class="list-inline-item">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/aleksandar-jeli%C4%87-b0445b76/"
                    class="text-dark"
                  >
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    target="_blank"
                    href="https://github.com/seniorescobar"
                    class="text-dark"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    target="_blank"
                    href="mailto:aleksandar@jelic.email"
                    class="text-dark"
                  >
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div class="col-xl-6 offset-xl-5 pt-5">
        <AboutMe />
        <Experience />
      </div>
    </div>

    <footer class="text-center py-5">
      <span class="text-secondary">© 2020 Aleksandar Jelić</span>
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
@import "./assets/scss/variables";
@import "node_modules/bootstrap/scss/bootstrap";

section.home {
  height: 100vh;
  min-height: 100vh;
}

.social-icons {
  li {
    a {
      font-size: 1.5rem;
    }
  }
}

@include media-breakpoint-up(xl) {
  #sidebar {
    position: fixed;
  }
}

img {
  width: 240px;
}
</style>