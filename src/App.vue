<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/toHeader.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <Header />
  <RouterView />
</template>
