<template>
    <div class="hero-container">
        <div class="hero-right">
            <div class="hero-text">
                <h1 class="hero-title">Transforme dados em decisões.<br>Transforme conversas em resultados.</h1>
                <h2 class="hero-subtitle">BI-FET: Inteligência Artificial com a Identidade da sua Marca.</h2>
            </div>
            <Button text="Experimente Grátis" target-id="#contact" @click="buttonClick" />
        </div>
        <img src="../assets/images/hero-img-small.svg"
            alt="Imagem com um robo na frente de um chat de conversa e duas pessoas discutindo sobre os gráficos">
    </div>
</template>

<script setup>
import Button from './Button.vue';
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
</style>