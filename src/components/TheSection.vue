<template>
  <section :id="id" class="mt-5">
    <h1 class="section-title mt-0 mb-4">{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ["id", "title"],
};
</script>

<style lang="scss">
</style>