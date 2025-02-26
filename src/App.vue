<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in">
      <component :key="$route.fullPath" :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style>
/* Animation fade + slide-up */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px); /* Départ légèrement en bas */
}

.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0); /* Position normale */
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Départ légèrement en bas */
}
</style>