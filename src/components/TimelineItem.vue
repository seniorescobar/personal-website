<template>
  <div class="timeline-container wow fadeInUp">
    <div class="content">
      <span class="time">
        <slot name="time"></slot>
      </span>
      <h3 class="title">
        <slot name="title"></slot> @ <slot name="employer"></slot>
      </h3>
      <p class="text-justify">
        <slot></slot>
      </p>
    </div>
  </div>
</template>