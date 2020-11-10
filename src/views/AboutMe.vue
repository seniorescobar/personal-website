<template>
  <section id="about">
    <div class="container">
      <!-- section title -->
      <h2 class="section-title wow fadeInUp">About me</h2>

      <div class="row">
        <div class="col">
          <div class="rounded-lg bg-white shadow-dark p-5">
            <div class="row">
              <div class="col-md-6">
                <!-- about text -->
                <p class="text-justify">
                  I’m a 23 year old web developer from Slovenia, working mostly
                  with the Go Programming Language, which I have adored ever
                  since finding out about it a few years ago.
                </p>
                <p>
                  Among other platforms I find immensely interesting, is AWS
                  which I was increasingly exposed to working in companies
                  building highly performant and scalable software.
                </p>
                <p>
                  Recently I have also started getting a feel of front-end
                  development, using the Vue.js framework, but have only used it
                  for my personal projects.
                </p>
              </div>
              <div class="col-md-6">
                <skill-item
                  name="Go Programming Language"
                  skill="90"
                  background="info"
                ></skill-item>
                <skill-item
                  name="Amazon Web Services"
                  skill="60"
                  background="warning"
                ></skill-item>
                <skill-item
                  name="Vue.js"
                  skill="30"
                  background="success"
                ></skill-item>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <div class="mt-2">
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