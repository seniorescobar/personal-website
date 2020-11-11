<template>
  <div class="row">
    <div class="col">
      <the-card>
        <div class="row">
          <div class="col-xl-6">
            <p>
              I’m a 23 year old web developer from Slovenia, working mostly with
              the Go Programming Language, which I have adored ever since
              finding out about it a few years ago.
            </p>
            <p>
              Among other platforms I find immensely interesting, is AWS which I
              was increasingly exposed to working in companies building highly
              performant and scalable software.
            </p>
            <p>
              Recently I have also started getting a feel of front-end
              development, using the Vue.js framework, but have only used it for
              my personal projects.
            </p>
          </div>
          <div class="col-xl-6">
            <skill-item
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :skill="skill.skill"
              :color="skill.color"
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
</template>

<script>
import TheCard from "../components/TheCard.vue";
import SkillItem from "../components/SkillItem.vue";

export default {
  components: {
    TheCard,
    SkillItem,
  },
  setup() {
    return {
      skills: [
        { name: "Go Programming Language", skill: 90, color: "info" },
        { name: "Amazon Web Services", skill: 60, color: "warning" },
        { name: "Vue.js", skill: 30, color: "success" },
      ],
    };
  },
};
</script>