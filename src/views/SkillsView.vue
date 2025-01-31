<script>
export default {
  data() {
    return {
      activeSkill: null
    }
  },
  methods: {
    setActiveSkill(skill) {
      this.activeSkill = skill
    },
    clearActiveSkill() {
      this.activeSkill = null
    }
  }
}
</script>

<template>
  <main>
    <h2 class="title">Compétences</h2>
    <div class="skills">
      <h3 @mouseover="setActiveSkill('javascript')" @mouseleave="clearActiveSkill">JavaScript</h3>
      <img
        v-show="activeSkill === 'javascript'"
        src="../assets/img/js.png"
        alt="Image au passage de la souris"
        class="image"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="setActiveSkill('htmlcss')" @mouseleave="clearActiveSkill">HTML/CSS</h3>

      <img
        v-show="activeSkill === 'htmlcss'"
        src="../assets/img/html.png"
        alt="Image au passage de la souris"
      />
      <img
        v-show="activeSkill === 'htmlcss'"
        src="../assets/img/css.png"
        alt="Image au passage de la souris"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="setActiveSkill('vuejs')" @mouseleave="clearActiveSkill">Vue.js</h3>
      <img
        v-show="activeSkill === 'vuejs'"
        src="../assets/img/vuejs.png"
        alt="Image au passage de la souris"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="setActiveSkill('strapi')" @mouseleave="clearActiveSkill">Strapi</h3>
      <img
        v-show="activeSkill === 'strapi'"
        src="../assets/img/strapi.monogram.logo.png"
        alt="Image au passage de la souris"
      />
    </div>

    <div class="skills">
      <h3 @mouseover="setActiveSkill('Postgresql')" @mouseleave="clearActiveSkill">PostgreSQL</h3>
      <img
        v-show="activeSkill === 'Postgresql'"
        src="../assets/img/postgresql.png"
        alt="Image au passage de la souris"
      />
    </div>
  </main>
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
  padding: 20px 30px 0 0;
  margin-left: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: default;
}
h2 {
  font-weight: bold;
  margin: 60px 0 60px 0;
}
h3 {
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  text-shadow: rgb(180, 237, 183) 1px 0px 25px;
  animation: none;
}

/*

img {
  border-radius: 0px;
  animation-duration: 1s;
  animation-name: slidein;
  height: 50px;
  width: 100%;
  object-fit: contain;
}

.skills {
  position: relative;
  margin-bottom: 20px;
  padding: 20px 30px 0 0;
  margin-left: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: default;
}
h3 {
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  text-shadow: 5px -5px 30px rgb(180, 237, 183);
  animation: none;
} */
</style>
