<script setup>
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <h2>Formations & Diplômes</h2>
  <section>
    <div class="formation">
      <div>
        <h3>Le Reacteur : Ecole en ligne</h3>
        <p>Obtention du titre RNCP de niveau 5 de développeur web et web mobile</p>
        <img src="../assets/img/logolereacteur.png" alt="" />
      </div>

      <div>
        <h3>Lycée Juliette Récamier</h3>
        <p>BTS Management des unités commerciales</p>
        <img src="../assets/img/Logo lycée JR.jpg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  height: 120px;
  width: 120px;
  border-radius: 10px;
  size-adjust: inherit;
  object-fit: contain;
  margin: 12px;
}
.formation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formation > div {
  margin: 100px;
  width: 200px;
  height: 270px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 20px;
  background-color: rgb(0, 15, 0);
  box-shadow: 5px -5px 30px rgb(180, 237, 183);
  opacity: 0.7;
}

div {
  /* border: 2px solid black; */
  padding: 10px;
}
h3 {
  font-weight: bold;
}
@media (max-width: 680px) {
  div {
    flex-direction: column;
    display: flex;
  }
  section {
    height: 120vh;
  }
}
</style>
