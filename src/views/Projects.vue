<template>
    <div>
        <h1>Mes Projets</h1>
        <p>Voici quelques projets que j'ai pu réaliser sur mon temps perso et durant mes études.</p>
        <p>🔧 = Perso | 🎓 = Scolaire</p>
        <div class="projects">
            <router-link v-for="(project, index) in sortedProjects" :key="index" :to="`/projects/${project.id}`"
                :id="project.id" class="project-link" :class="{ 'reverse': index % 2 !== 0 }">
                <img :src="getImagePath(project.image)" :alt="`Preview de ${project.title}`" class="preview">
                <div class="project-text">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.brief }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { onMounted } from "vue";

onMounted(() => {
    const projects = document.querySelectorAll(".project-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    projects.forEach((project) => observer.observe(project));
});

import { projects } from "@/data/projects";

const sortedProjects = computed(() =>
    [...projects].sort((a, b) => new Date(b.date) - new Date(a.date))
);

const getImagePath = (path) => {
  return path.startsWith("/assets/") ? path : `/assets/${path}`;
};
</script>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
}

.project-link {
    min-width: 150px;
    text-decoration: none;
    color: inherit;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    padding: 2rem;
    gap: 1rem;
    opacity: 0;
    transform: translateX(100px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.project-link:nth-child(even) {
    transform: translateX(-100px);
}

.project-link.visible:hover {
    transform: scale(1.02);
    backface-visibility: hidden;
    transition: transform 0.1s ease;
}

.project-link.visible {
    opacity: 1;
    transform: translateX(0);
}

/* Inverser l’image et le texte pour les projets pairs */
.project-link.reverse {
    flex-direction: row-reverse;
}

.preview {
    max-width: 180px;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
    width: 100%;
}

.project-text {
    flex: 1;
}

@media screen and (max-width: 600px) {
    .project-link {
        flex-direction: column;
        transform: translateX(0);
        transition: opacity 0.8s ease;
    }

    .project-link:nth-child(even) {
        transform: translateX(0);
        transition: opacity 0.8s ease;
    }

    .project-link.reverse {
        flex-direction: column;
    }

    .projects {
        padding: 5px;
    }

    .project-link {
        padding: 10px;
    }
}
</style>
