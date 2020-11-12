<template>
  <div class="row">
    <div class="col">
      <the-card class="timeline exp">
        <timeline-item
          time="Dec 2019 - May 2020"
          title="Web Developer"
          :at="{name:'Applike (JustDice)', url: 'https://justdice.io/'}"
          city="Hamburg"
          country="🇩🇪"
        >
          <template v-slot>
            At AppLike I worked on a Golang back-end for a platform focused on
            optimizing the process of acquiring users for company’s mobile
            games. Among a sea of AWS services I used there, I also came across
            Terraform used for managing them. Despite loving to work with the
            team and the tech stack, I found it difficult settling in, being so
            far away from my home country. Since there was no option to work
            remotely, I found no other solution but to move back home and seek
            an opportunity that would allow me to continue something similar
            from home.
          </template>
        </timeline-item>
        <timeline-item
          time="Mar 2019 - Jun 2019"
          title="Web Developer"
          :at="{name: 'Viberate', url: 'https://www.viberate.com/'}"
          city="Ljubljana"
          country="🇸🇮"
        >
          <template v-slot>
            After taking some time off to fully focus on my uni studies, I
            joined Viberate, a fast growing startup in the music industry, where
            I worked 4 days per week on a Golang back-end, used for a festivals
            mobile app. Despite enjoying much more responsibility, I ended up
            leaving after just 4 months, not being fully satisfied with the work
            environment.
          </template>
        </timeline-item>
        <timeline-item
          time="Oct 2017 - Oct 2018"
          title="Web Developer"
          :at="{name: 'Zemanta (Outbrain)', url: 'https://www.zemanta.com/'}"
          city="Ljubljana"
          country="🇸🇮"
        >
          <template v-slot>
            At Zemanta, an Outbrain company, I found it interesting and very
            challenging working on a Golang back-end for a real-time bidding
            platform for web ads, having learned a lot about building highly
            performant and scalable software. I’ve also become familiar with AWS
            services and learned how they are used in production.
          </template>
        </timeline-item>
        <timeline-item
          time="Jul 2013 - Oct 2017"
          title="Web Developer"
          :at="{name: 'ISL Online', url: 'https://www.islonline.com/'}"
          city="Ljubljana"
          country="🇸🇮"
        >
          <template v-slot>
            Landing my first part time job in tech at just 16 years old, I
            couldn’t be happier to work in a dev team of 20 people, working on
            non-critical tasks that required knowledge of HTML, CSS, PHP and
            PostgreSQL. Towards the end I also got introduced to Golang, and
            have since stuck with it.
          </template>
        </timeline-item>
      </the-card>
    </div>
  </div>
</template>

<script>
import TheCard from "../components/TheCard.vue";
import TimelineItem from "../components/TimelineItem.vue";

export default {
  components: {
    TheCard,
    TimelineItem,
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap";

@include media-breakpoint-up(md) {
  .timeline.exp .timeline-container::after {
    content: "\e04b";
  }
}
</style>