<template>
  <div class="timeline-container pb-3">
    <div class="content">
      <span class="time text-secondary">
        {{ time }}
      </span>
      <h4 class="my-1">{{ title }}</h4>
      <div>
        <span class="h5 mr-1">
          <a :href="at.url" target="_blank" class="text-secondary">{{ at.name }}</a>
        </span>
        <span class="font-italic mr-1">{{ city }}</span>
        <span>{{ country }}</span>
      </div>
      <p class="text-justify p-0">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["time", "title", "at", "city", "country"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "node_modules/bootstrap/scss/bootstrap";

.timeline-container {
  position: relative;
  background-color: inherit;

  &:last-of-type {
    padding-bottom: 0 !important;
  }

  @include media-breakpoint-up(md) {
    border-left: 1px $primary solid;
    padding-left: 50px;
    padding-bottom: 50px;

    &::after {
      background: #fff;
      font-family: "simple-line-icons";
      font-size: 24px;
      color: $primary;
      position: absolute;
      left: -12px;
      top: 0;
      z-index: 1;
    }
  }

  .content {
    .time {
      font-size: 14px;
    }
  }
}
</style>