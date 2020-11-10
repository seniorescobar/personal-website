<template>
  <div class="card-round bg-white shadow-lg p-4 p-md-5">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import 'node_modules/bootstrap/scss/bootstrap';

.card-round {
  border-radius: 0.5rem;
}

@include media-breakpoint-up(md) {
  .card-round {
    border-radius: $border-radius-lg;
  }
}
</style>