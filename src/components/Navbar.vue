<template>
    <div class="navbar-container">
        <div class="menu-toggle" @click="toggleMenu">☰</div>

        <div class="logo">
            <img src="../assets/images/bifet-logo.svg" alt="Logo da BI-FET" class="navbar-logo">
        </div>

        <div class="links" :class="{ open: isMenuOpen }">
            <ul>
                <li class="link" id="hero-section"><a href="#home">Home</a></li>
                <li class="link" id="about-section"><a href="#about">Sobre</a></li>
                <li class="link" id="product-section"><a href="#product">Produto</a></li>
                <li class="link" id="contact-section"><a href="#contact">Contato</a></li>
            </ul>
        </div>
        <Button text="Agendar demonstração" targetId="#contact" @buttonClick="buttonClick" class="scredule-btn" />
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
};

const buttonClick = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
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

.menu-toggle {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-color);
}

@media (max-width: 768px) {
    .navbar-container {
        justify-content: flex-start;
        gap: 32px;
    }

    .menu-toggle {
        display: block;
    }

    .links {
        display: none;
        position: absolute;
        top: 80px;
        left: 30px;
        background-color: var(--btn-text);
        border-radius: var(--border-radius-medium);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 1rem 2rem;
        z-index: 1000;
    }

    .links.open {
        display: block;
    }

    .links ul {
        flex-direction: column;
        gap: 24px;
    }

    .scredule-btn {
        display: none;
    }
}
</style>