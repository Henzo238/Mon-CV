<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openNav() {
      this.isOpen = true
    },
    closeNav() {
      this.isOpen = false
    }
  }
}
</script>

<template>
  <span @click="openNav" class="openbtn">&#9776;</span>
  <div :class="['sidenav', { 'sidenav-open': isOpen }]">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <RouterLink :to="{ name: 'home' }" @click="closeNav"> Accueil </RouterLink>
    <RouterLink :to="{ name: 'formation' }" @click="closeNav"> Formation </RouterLink>
    <RouterLink :to="{ name: 'experiences' }" @click="closeNav"> Expériences </RouterLink>
    <RouterLink :to="{ name: 'competences' }" @click="closeNav"> Compétences </RouterLink>
    <RouterLink :to="{ name: 'contact' }" @click="closeNav"> Contact </RouterLink>
  </div>
</template>

<style scoped>
/* The side navigation menu */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* @media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
} */

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #242222;
  color: white;
  padding: 10px 15px;
  border: none;
  position: sticky;
}

.sidenav-open {
  width: 250px;
}

span {
  padding-top: 20px;
}

@media (min-width: 850px) {
  .openbtn {
    display: none;
  }
  .sidenav {
    display: none;
  }
}
</style>
