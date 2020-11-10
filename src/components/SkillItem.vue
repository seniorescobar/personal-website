<template>
  <div class="mb-3">
    <div class="d-flex justify-content-between">
      <h4 class="mb-3 mt-0">{{ name }}</h4>
      <!-- <span class="">{{ skill }}%</span> -->
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        :class="'bg-' + background"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="skill"
        :style="'width: ' + skill + '%'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
    props: [
        "name",
        "skill",
        "background",
    ]
}
</script>