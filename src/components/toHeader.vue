<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const handleClick = () => {
  window.scrollTo({ top: 1700, behavior: 'smooth' })
}
</script>

<template>
  <div class="scroll-background">
    <section>
      <h1>Henzo Goncalves</h1>
      <h2>Développeur Web Fullstack Junior</h2>

      <span>
        <font-awesome-icon :icon="['fas', 'chevron-circle-down']" @click="handleClick" />
      </span>
    </section>
  </div>
</template>

<style scoped>
h1,
h2 {
  animation-duration: 2s;
  animation-name: slidein;
}
h2 {
  padding-bottom: 100px;
}

@keyframes slidein {
  from {
    margin-right: 20%;
    width: 50%;
  }
  to {
    margin-left: 0%;
    width: 50%;
  }
}
.scroll-background {
  height: 170vh;
  background: linear-gradient(rgb(0, 15, 0) 70%, rgb(64, 117, 62));
}
section {
  position: sticky;
  top: 0px;
}
svg {
  color: rgb(180, 237, 183);
  border: 1px solid rgb(180, 237, 183);
  border-radius: 50px;
  padding: 5px;
  font-size: 50px;
}
svg:hover {
  font-size: 55px;
  box-shadow: 0 0 50px 5px rgb(180, 237, 183);
  transition: width 0.5s;
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
