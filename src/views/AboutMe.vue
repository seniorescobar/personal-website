<template>
  <section id="about">
    <div class="container">
      <!-- section title -->
      <h2 class="section-title wow fadeInUp">About me</h2>

      <div class="spacer" data-height="60"></div>

      <div class="row">
        <div class="col-md-3">
          <div class="text-center text-md-left">
            <!-- avatar image -->
            <img src="../assets/images/avatar-2.svg" alt="Bolby" />
          </div>
          <div class="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div class="col-md-9 triangle-left-md triangle-top-sm">
          <div class="rounded bg-white shadow-dark padding-30">
            <div class="row">
              <div class="col">
                <!-- about text -->
                <p>
                  I’m a 23 year old web developer from Slovenia, working mostly
                  with the Go Programming Language, which I have adored ever
                  since finding out about it a few years ago. Among other
                  platforms I find immensely interesting, is AWS which I was
                  increasingly exposed to working in companies building highly
                  performant and scalable software. Recently I have also started
                  getting a feel of front-end development, using the Vue.js
                  framework, but have only used it for my personal projects.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <skill-item name="Go Programming Language" skill="90" background="info"></skill-item>
                <skill-item name="Amazon Web Services" skill="60" background="warning"></skill-item>
                <skill-item name="Vue.js" skill="30" background="success"></skill-item>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mt-3">
                  <a href="#" class="btn btn-primary">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillItem from "../components/SkillItem.vue";

export default {
  components: {
    SkillItem,
  },
};
</script>