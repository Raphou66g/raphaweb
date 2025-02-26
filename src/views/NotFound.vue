<template>
    <div class="not-found, main-content">
        <h1>404 - Page non trouvée</h1>
        <img src="../assets/Shadok.jpg" alt="Pourquoi faire simple quand on peut faire compliqué ?" />
        <p>Oops ! La page que vous cherchez n'existe pas.</p>
        <p>Peut-être qu'elle a été déplacée ou supprimée.</p>
        <p>Redirection vers l'accueil dans {{ countdown }} secondes...</p>
        <router-link to="/">Retour à l'accueil maintenant</router-link>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const countdown = ref(7);

        onMounted(() => {
            const interval = setInterval(() => {
                countdown.value--;
                if (countdown.value === 0) {
                    clearInterval(interval);
                    router.push('/');
                }
            }, 1000);
        });

        return { countdown };
    }
};
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

.not-found a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.not-found a:hover {
    background: #0056b3;
}

img {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
}
</style>