<template>
  <the-section id="about" title="About me">
    <div class="row">
      <div class="col">
        <the-card>
          <div class="row">
            <div class="col-xl-6">
              <p>
                I’m a 23 year old web developer from Slovenia, working mostly
                with the Go Programming Language, which I have adored ever since
                finding out about it a few years ago.
              </p>
              <p>
                Among other platforms I find immensely interesting, is AWS which
                I was increasingly exposed to working in companies building
                highly performant and scalable software.
              </p>
              <p>
                Recently I have also started getting a feel of front-end
                development, using the Vue.js framework, but have only used it
                for my personal projects.
              </p>
            </div>
            <div class="col-xl-6">
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
        </the-card>
      </div>
    </div>
  </the-section>
</template>

<script>
import TheSection from "../components/TheSection.vue";
import TheCard from "../components/TheCard.vue";
import SkillItem from "../components/SkillItem.vue";

export default {
  components: {
    TheSection,
    TheCard,
    SkillItem,
  },
};
</script>