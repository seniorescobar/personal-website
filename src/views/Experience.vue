<template>
  <section id="experience">
    <div class="container">
      <!-- section title -->
      <h2 class="section-title wow fadeInUp">Experience</h2>

      <div class="row">
        <div class="col">
          <!-- timeline wrapper -->
          <div
            class="timeline exp bg-white rounded-lg shadow-dark p-5 overflow-hidden"
          >
            <timeline-item>
              <template v-slot:time>Jul 2013 - Oct 2017</template>
              <template v-slot:title>Web Developer</template>
              <template v-slot:employer>ISL Online</template>
              <template v-slot>
                  Landing my first part time job in tech at just 16 years old, I
                  couldn’t be happier to work in a dev team of 20 people,
                  working on non-critical tasks that required knowledge of HTML,
                  CSS, PHP and PostgreSQL. Towards the end I also got introduced
                  to Golang, and have since stuck with it.
              </template>
            </timeline-item>

            <timeline-item>
              <template v-slot:time>Oct 2017 - Oct 2018</template>
              <template v-slot:title>Web Developer</template>
              <template v-slot:employer>Zemanta (Outbrain)</template>
              <template v-slot>
                  At Zemanta, an Outbrain company, I found it interesting and
                  very challenging working on a Golang back-end for a real-time
                  bidding platform for web ads, having learned a lot about
                  building highly performant and scalable software. I’ve also
                  become familiar with AWS services and learned how they are
                  used in production.
              </template>
            </timeline-item>

            <timeline-item>
              <template v-slot:time>Mar 2019 - Jun 2019</template>
              <template v-slot:title>Web Developer</template>
              <template v-slot:employer>Viberate</template>
              <template v-slot>
                  After taking some time off to fully focus on my uni studies, I
                  joined Viberate, a fast growing startup in the music industry,
                  where I worked 4 days per week on a Golang back-end, used for
                  a festivals mobile app. Despite enjoying much more
                  responsibility, I ended up leaving after just 4 months, not
                  being fully satisfied with the work environment.
              </template>
            </timeline-item>

            <timeline-item>
              <template v-slot:time>Dec 2019 - May 2020</template>
              <template v-slot:title>Web Developer</template>
              <template v-slot:employer>Applike</template>
              <template v-slot>
                  My next career goal was moving to Germany, accepting an offer
                  from AppLike, to work on a Golang back-end for a platform
                  focused on optimizing the process of acquiring users for
                  company’s mobile games. Among a sea of AWS services I used
                  there, I also came across Terraform used for managing them.
                  Despite loving to work with the team and the tech stack, I
                  found it difficult settling in, being so far away from my home
                  country. Since there was no option to work remotely, I found
                  no other solution but to move back home and wait for an oppor-
                  tunity that would allow me to continue something similar, but
                  from home.
              </template>
            </timeline-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TimelineItem from "../components/TimelineItem.vue";

export default {
  components: {
    TimelineItem,
  },
};
</script>