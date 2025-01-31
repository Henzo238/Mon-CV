<template>
  <main>
    <h2 class="title">Expériences professionnelles</h2>
    <div class="exp">
      <div>
        <h3>Community Manager, Bao Brunch</h3>
        <li>Création de contenus</li>
        <li>Modération</li>
        <li>Animation des réseaux sociaux</li>
      </div>
      <div>
        <h3>Responsable DRIVE, Carrefour Market</h3>
        <li>Préparation et distribution des commandes</li>
        <li>Formation des collaborateurs</li>
        <li>Traitement des réclamations client</li>
      </div>
    </div>
  </main>
</template>

<style scoped>
.exp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.exp > div {
  margin: 100px;
  width: 275px;
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
h2 {
  font-weight: bold;
  margin: 60px 0 60px 0;

  /* margin-top: 60px; */
}
h3 {
  font-weight: bold;
}
li {
  margin-top: 20px;
  display: flex;
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
