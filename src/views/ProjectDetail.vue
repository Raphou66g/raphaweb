<template>
    <div class="project-detail" v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="project.image" :alt="`Image de ${project.title}`" class="preview">

        <p class="brief">{{ project.brief }}</p>

        <ul class="description-list">
            <li v-for="(item, index) in project.description" :key="index">
                {{ item }}
            </li>
        </ul>

        <!-- Affichage des liens -->
        <div class="links">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" class="link-item">
                <img :src="'/src/assets/icons/' + getIcon(link.name)" :alt="link.name" class="icon" />
                {{ link.name }}
            </a>
        </div>

        <!-- Galerie -->
        <div class="gallery" v-if="project.media.length > 0">
            <h2>Galerie</h2>
            <div class="gallery-container">
                <template v-for="(media, index) in project.media" :key="index">
                    <!-- Affichage des images normales -->
                    <img v-if="media.type === 'image'" :src="media.src" :alt="`Image ${index + 1} de ${project.title}`"
                        class="gallery-item" @click="openLightbox(index)">

                    <!-- Affichage des miniatures pour les vidéos -->
                    <div v-else class="video-thumbnail" @click="openLightbox(index)">
                        <img :src="media.thumbnail" :alt="`Vidéo ${index + 1}`" class="gallery-item">
                        <span class="video-icon">▶</span>
                    </div>
                </template>
            </div>
        </div>

        <router-link to="/projects" class="back">Retour aux projets</router-link>

        <!-- Lightbox -->
        <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
            <button class="close-btn" @click="closeLightbox">✖</button>
            <button class="prev-btn" @click.stop="prevMedia" :disabled="currentIndex === 0">◀</button>
            <button class="next-btn" @click.stop="nextMedia"
                :disabled="currentIndex === project.media.length - 1">▶</button>
            <div class="lightbox-content" @click.stop>

                <Transition :name="slideDirection">
                    <img v-if="currentMedia.type === 'image'" :src="currentMedia.src" class="lightbox-media"
                        :key="currentIndex">
                    <video v-else :src="currentMedia.src" class="lightbox-media" controls autoplay
                        :key="currentIndex"></video>
                </Transition>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";

const route = useRoute();
const projectId = route.params.id;
const project = computed(() => projects.find(p => p.id === projectId));

const lightboxOpen = ref(false);
const currentIndex = ref(0);
const slideDirection = ref("slide-right");

const openLightbox = (index) => {
    currentIndex.value = index;
    lightboxOpen.value = true;
};

const closeLightbox = () => {
    lightboxOpen.value = false;
};

const prevMedia = () => {
    if (currentIndex.value > 0) {
        slideDirection.value = "slide-left";
        currentIndex.value--;
    }
};

const nextMedia = () => {
    if (currentIndex.value < project.value.media.length - 1) {
        slideDirection.value = "slide-right";
        currentIndex.value++;
    }
};

const currentMedia = computed(() => project.value.media[currentIndex.value]);

const getIcon = (name) => {
    if (name.toLowerCase().includes("github")) return "github-mark-white.svg";
    if (name.toLowerCase().includes("gitlab")) return "gitlab-logo-500.svg";
    if (name.toLowerCase().includes("google")) return "google-docs.svg";
    return "facepalm.png"; // Icône générique pour les autres liens
};
</script>

<style scoped>
.project-detail {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
}

.preview {
    max-width: 400px;
    max-height: 600px;
    border-radius: 10px;
    margin: 20px auto;
    text-align: center;
    width: 100%;
}

.brief {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 15px;
}

.description-list {
    text-align: left;
    padding: 0;
    list-style: none;
}

.description-list li {
    font-size: 1em;
    margin: 5px 0;
    text-align: center;
}

/* Galerie */
.gallery {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
}

.gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.gallery-item {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.1);
}

/* Liens */
.links {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.link-item {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 5px;
}

.link-item:hover {
    background: rgba(255, 255, 255, 0.3);
}


.icon {
    width: 20px;
    height: 20px;
}

/* Miniature vidéo */
.video-thumbnail {
    position: relative;
    display: inline-block;
}

.video-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 15px;
    border-radius: 50%;
}

.video-icon:hover {
    cursor: pointer;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
}

.lightbox-content {
    position: relative;
    display: flex;
    align-items: center;
}

.lightbox-media {
    max-width: 80vw;
    max-height: 80vh;
    border-radius: 10px;
}

/* Transitions */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-right-enter-from {
    transform: translateX(50%);
    opacity: 0;
}

.slide-right-leave-to {
    transform: translateX(-50%);
    opacity: 0;
}

.slide-left-enter-from {
    transform: translateX(-50%);
    opacity: 0;
}

.slide-left-leave-to {
    transform: translateX(50%);
    opacity: 0;
}

/* Boutons navigation */
.close-btn,
.prev-btn,
.next-btn {
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    z-index: 999;
}

.close-btn {
    top: 10px;
    right: 10px;
}

.prev-btn {
    left: 10px;
}

.next-btn {
    right: 10px;
}

.prev-btn:disabled,
.next-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.close-btn:hover,
.prev-btn:hover,
.next-btn:hover {
    background: #dfdfdfee;
}
</style>