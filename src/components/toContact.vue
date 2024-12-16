<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <section>
    <h2>Me contacter</h2>
    <div>
      <a href="https://www.linkedin.com/in/henzo-goncalves-444238270" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/Henzo238" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"
      /></a>
    </div>
  </section>
</template>

<style scoped>
svg {
  font-size: 75px;
  cursor: pointer;
  align-items: center;
  margin: 60px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
