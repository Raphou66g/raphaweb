<template>
  <nav class="navbar">
    <div class="nav-div">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">Accueil</router-link>
        </li>
        <li class="nav-item">
          <div class="dropdown" @mouseover="dropdownOpen = true" @mouseleave="dropdownOpen = false">
            <router-link to="/projects" class="nav-link dropdown-btn" :class="{ active: isActive('/projects') }">
              Projets ▾
            </router-link>
            <div class="dropdown-menu" v-show="dropdownOpen">
              <router-link v-for="project in sortedProjects" :key="project.id" :to="'/projects/' + project.id"
                class="dropdown-item" :class="{ active: isActive('/projects/' + project.id) }">
                {{ project.title }}
              </router-link>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" :class="{ active: isActive('/about') }">À propos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">Contact</router-link>
        </li>
      </ul>
    </div>
    <!---
    <DateTime class="dateTime" />
    -->
  </nav>
</template>

<script setup>
import DateTime from '@/components/DateTime.vue';


import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects"; // Importe la liste des projets

const route = useRoute();
const dropdownOpen = ref(false);

// Vérifie si le lien est actif
const isActive = (path) => route.path.endsWith(path);

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date))
);

</script>

<style scoped>
/* Style de la navbar */
.dateTime {
  color: rgb(18, 184, 27);
  text-align: center;
}

.navbar {
  min-width: 430px;
  position: sticky;
  top: 24px;
  width: 90%;
  z-index: 1000;
  margin: 0 auto;
  display: flex;
  background: #22222280;
  padding: 5px 10px 5px 5px;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-link:hover,
.active {
  background: green;
}

.nav-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding-inline-start: 0;
}

.nav-item {
  list-style: none;
}

/* Style du dropdown */
.dropdown {
  position: relative;
}

.dropdown-btn {
  /* background: none; */
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  font-size: 1rem;
  text-align: left;
}

.dropdown-menu {
  position: absolute;
  top: 125%;
  left: 0;
  background: white;
  border-radius: 5px;
  min-width: 150px;
  overflow: hidden;
  z-index: 1000;
}

.dropdown-item {
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;
  transition: background 0.3s;
}

.dropdown-item:hover {
  background: #ddd;
}

@media screen and (max-width: 460px) {
  .navbar {
    flex-direction: column-reverse;
    min-width: 0px;
  }

  .nav-list {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>