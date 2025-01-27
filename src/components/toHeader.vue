<script></script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }"> Accueil </RouterLink>
      <RouterLink :to="{ name: 'formation' }"> Formation </RouterLink>
      <RouterLink :to="{ name: 'experiences' }"> Expériences </RouterLink>
      <RouterLink :to="{ name: 'competences' }"> Compétences </RouterLink>
      <RouterLink :to="{ name: 'contact' }"> Contact </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  width: 60%;
  margin: 0 auto;
}
nav {
  /* padding: 20px 40px 20px 40px; */
  height: 60px;
  width: 950px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: start;
  border: solid 1px white;
  border-radius: 30px;
}
a {
  color: white;
  text-decoration: none;
  padding: 20px 40px 20px 40px;
}
a:hover {
  color: rgb(0, 15, 0);
  font-weight: bold;
  background-color: rgb(180, 237, 183);
  padding: 20px 40px 20px 40px;
  border-radius: 30px;
}
.router-link-active {
  background-color: rgb(180, 237, 183);
  color: rgb(0, 15, 0);
  border-radius: 30px;
  font-weight: bold;
}
</style>
