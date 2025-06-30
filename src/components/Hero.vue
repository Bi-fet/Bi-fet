<template>
    <div class="hero-container" id="home">
        <div class="hero-right">
            <div class="hero-text">
                <h1 class="hero-title">Transforme dados em decisões.<br>Transforme conversas em resultados.</h1>
                <h2 class="hero-subtitle">BI-FET: Inteligência Artificial com a Identidade da sua Marca.</h2>
            </div>
            <Button text="Experimente Grátis" target-id="#contact" @buttonClick="buttonClick" />
        </div>
        <img src="../assets/images/hero-img-small.svg"
            alt="Imagem com um robo na frente de um chat de conversa e duas pessoas discutindo sobre os gráficos">
    </div>
</template>

<script setup>
import Button from './Button.vue';

const buttonClick = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
.hero-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 120px auto;
}

.hero-right {
    display: flex;
    flex-direction: column;
    gap: 56px;
}

.hero-title {
    font-size: var(--font-size-title-hero);
    color: var(--primary-color);
}

.hero-subtitle {
    font-size: var(--font-size-subtitle-hero);
    color: var(--text-color);
    margin-top: 32px;
}

@media (max-width: 1024px) {
    .hero-container {
        padding: 0 32px;
        gap: 80px;
    }

    .hero-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .hero-container {
        flex-direction: column-reverse;
        gap: 40px;
    }

    .hero-right {
        padding: 0 24px;
    }

    .hero-container img {
        width: 100%;
        max-width: 450px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.75rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .hero-right {
        padding: 0 16px;
    }

    .hero-container img {
        max-width: 300px;
    }
}
</style>