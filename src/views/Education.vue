<template>
  <div class="row">
    <div class="col">
      <the-card class="timeline edu">
        <timeline-item
          time="Oct 2015 - Feb 2021"
          title="Computer and Information Science"
          :at="{name: 'University of Ljubljana, Faculty of Computer and Information Science', url: 'https://www.fri.uni-lj.si/en'}"
        >
          <p>
            Being the type of person to always put practical work before
            studies, I plan to pass my last 2 remaining exams at the end of
            January and then finally graduate in February 2021.
          </p>

          <div class="row mt-4">
            <div class="col">
              <skill-item
                v-for="exam in exams"
                :key="exam.name"
                :name="exam.name"
                :url="exam.url"
                :skill="exam.progress * 100"
                :color="exam.color"
                :text="exam.days + ' days to go'"
              >
              </skill-item>
            </div>
          </div>
        </timeline-item>
        <timeline-item
          time="Sep 2011 - Jun 2015"
          title="Technical Gymnasium"
          :at="{name:'Vegova, Upper Secondary School of Electrical and Computer Engineering and Technical Gymnasium', url: 'https://www.vegova.si/'}"
        >
        </timeline-item>
      </the-card>
    </div>
  </div>
</template>

<script>
import TheCard from "../components/TheCard.vue";
import TimelineItem from "../components/TimelineItem.vue";
import SkillItem from "../components/SkillItem.vue";

export default {
  components: {
    TheCard,
    TimelineItem,
    SkillItem,
  },
  setup() {
    const exams = [
      {
        name: "Computability and Computational Complexity",
        date: new Date("2021-01-22"),
        color: "info",
        url: "https://www.fri.uni-lj.si/en/course/63283",
      },
      {
        name: "Machine Perception",
        date: new Date("2021-01-26"),
        color: "warning",
        url: "https://www.fri.uni-lj.si/en/course/63267",
      },
      {
        name: "Diploma Thesis",
        date: new Date("2021-02-16"),
        color: "success",
      },
    ];

    const toDays = (m) => {
      return m / (1000 * 60 * 60 * 24);
    };

    const today = new Date();
    const start = new Date("2020-10-01");

    for (const i in exams) {
      const e = exams[i];
      e.progress = (today - start) / (e.date - start);
      e.days = Math.floor(toDays(e.date - today));
    }

    return { exams };
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap";

@include media-breakpoint-up(md) {
  .timeline.edu .timeline-container::after {
    content: "\e019";
  }
}
</style>