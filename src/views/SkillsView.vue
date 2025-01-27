<script>
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
export default {
  data() {
    return {
      showImage: false
    }
  }
}
</script>

<template>
  <section>
    <h2>Compétences</h2>

    <div class="skills">
      <h3 @mouseover="showImage = true" @mouseleave="showImage = false">JavaScript</h3>
      <img
        v-show="showImage"
        src="../assets/img/js.png"
        alt="Image au passage de la souris"
        class="image"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="showImage = true" @mouseleave="showImage = false">HTML/CSS</h3>
      <img
        v-show="showImage"
        src="../assets/img/html.png"
        alt="Image au passage de la souris"
      /><img v-show="showImage" src="../assets/img/css.png" alt="Image au passage de la souris" />
    </div>

    <div class="skills">
      <h3 @mouseover="showImage = true" @mouseleave="showImage = false">Vue.js</h3>
      <img v-show="showImage" src="../assets/img/vuejs.png" alt="Image au passage de la souris" />
    </div>

    <div class="skills">
      <h3 @mouseover="showImage = true" @mouseleave="showImage = false">Strapi</h3>
      <img
        v-show="showImage"
        src="../assets/img/strapi.monogram.logo.png"
        alt="Image au passage de la souris"
        class="image"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="showImage = true" @mouseleave="showImage = false">PostgreSQL</h3>
      <img
        v-show="showImage"
        src="../assets/img/postgresql.png"
        alt="Image au passage de la souris"
      />
    </div>
  </section>
</template>

<style scoped>
img {
  border-radius: 0px;
  animation-duration: 1s;
  animation-name: slidein;
  height: 50px;
  width: 100%;
  object-fit: contain;
}

@keyframes slidein {
  from {
    margin-right: 0%;
    width: 0%;
  }
  to {
    margin-left: 0%;
    width: 40%;
  }
}
.skills {
  /* display: flex; */
  /* border: 2px solid black; */
  padding: 20px 30px 0 0;
  margin-left: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: default;
}
</style>
