<script setup></script>

<template>
  <div>
    <main>
      <h1>Henzo Goncalves</h1>
      <h2>Développeur Web Front-end Junior</h2>
    </main>
  </div>
</template>

<style scoped>
h1,
h2 {
  animation-duration: 2s;
  animation-name: slidein;
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

@media (max-width: 400px) {
  @media (max-width: 480px) {
    nav {
      padding: 5px 10px;
    }
    a {
      padding: 5px 10px;
    }
  }
}
main {
  height: 640px;
}
</style>
