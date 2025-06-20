<template>
    <div class="navbar-container">
        <div class="logo">
            <img src="../assets/images/bifet-logo.svg" alt="Logo da BI-FET" class="navbar-logo">
        </div>
        <div class="links">
            <ul>
                <li class="link" id="hero-section"><a href="#home">Home</a></li>
                <li class="link" id="about-section"><a href="#about">Sobre</a></li>
                <li class="link" id="product-section"><a href="#product">Produto</a></li>
                <li class="link" id="contact-section"><a href="#contact">Contato</a></li>
            </ul>
        </div>
        <Button text="Agendar demonstração" targetId="#contact" @click="buttonClick" />
    </div>
    <hr>
</template>

<script setup>
import Button from './Button.vue'

const buttonClick = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
.navbar-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 1rem 3rem;
    font-family: var(--font-family-sans-serif);
}

.navbar-logo {
    height: 50px;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.links ul {
    display: flex;
    flex-direction: row;
    gap: 64px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.link a {
    color: var(--link-color);
    text-decoration: none;
}

.link a:hover {
    color: var(--primary-color);
}

.link a:active {
    color: var(--link-active);
}
</style>