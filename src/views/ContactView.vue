<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <main>
    <h2 class="title">Me contacter</h2>
    <div>
      <a href="https://www.linkedin.com/in/henzo-goncalves-444238270" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/Henzo238" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"
      /></a>
      <a href="mailto:henzo.g@hotmail.fr"> <font-awesome-icon :icon="['fas', 'envelope']" /></a>
    </div>
  </main>
</template>

<style scoped>
h2 {
  font-weight: bold;
  margin: 60px 0 60px 0;
}
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

@media (max-width: 680px) {
  svg {
    display: flex;
  }
}
</style>
