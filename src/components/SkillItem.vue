<template>
  <div class="mb-3">
    <div class="d-flex justify-content-between">
      <span class="h5 text-left mb-3 mt-0">{{ name }}</span>
      <span class="text-left">{{ text }}</span>
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        :class="'bg-' + color"
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
        "color",
        "text",
    ]
}
</script>

<style lang="scss" scoped>
</style>