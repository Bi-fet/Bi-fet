<template>
    <footer>
        <div class="footer-navigation">
            <div class="footer-item">
                <h4 class="footer-title">Informações</h4>
                <ul>
                    <li>Termos de Uso</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>
            <div class="footer-item">
                <h4 class="footer-title">Navegação</h4>
                <ul>
                    <li>Home</li>
                    <li>Sobre a BI-FET</li>
                    <li>Nosso Produto</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div class="footer-item">
                <h4 class="footer-title">Contato</h4>
                <ul>
                    <li>bifet25@gmail.com</li>
                </ul>
            </div>
            <div class="footer-item mascote">
                <div class="footer-text">
                    <h4 class="footer-title">Conecte-se Conosco</h4>
                    <a href="#"><img src="../assets/images/linkedin-icon.svg" alt="Ícone do Linkedin"></a>
                </div>
                <img src="../assets/images/t-byte.svg" alt="Mascote da Bi-fet, um robozinho chamado T-Byte."
                    class="robo">
            </div>
        </div>
        <p>© 2025 BI-FET. Todos os direitos reservados.</p>
    </footer>
</template>

<style>
footer {
    background-image: url(../assets/images/bg-noise.svg);
    padding: 50px 200px 20px;
}

.footer-navigation {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

h4 {
    color: var(--btn-text);
    font-weight: var(--font-weight-medium);
    font-family: var(--font-family-sans-serif);
    margin-bottom: 16px;
    flex-wrap: wrap;
}

li {
    color: var(--btn-text);
    margin-bottom: 18px;
    cursor: pointer;
}

.robo {
    height: 200px;
}

.mascote {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
}

p {
    color: var(--btn-text);
    text-align: center;
    margin-top: 24px;
}

@media (max-width: 1024px) {
    footer {
        padding: 40px 60px 20px;
    }

    .footer-navigation {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    .mascote {
        max-width: 100%;
        justify-content: center;
        margin-top: 30px;
    }

    .robo {
        height: 160px;
    }
}

@media (max-width: 768px) {
    footer {
        padding: 30px 40px 20px;
    }

    .footer-navigation {
        grid-template-columns: 2fr;
        gap: 30px;
    }

    .mascote {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        margin: 0 auto;
    }

    .footer-text {
        margin-bottom: 20px;
    }

    .robo {
        height: 140px;
    }

    h4 {
        text-align: center;
    }

    ul {
        padding-left: 0;
        text-align: center;
    }

    li {
        margin-bottom: 12px;
    }
}

@media (max-width: 480px) {
    footer {
        padding: 20px 20px 15px;
    }

    .robo {
        height: 110px;
    }

    h4 {
        font-size: 1rem;
    }

    li {
        font-size: 0.9rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 0.85rem;
    }
}
</style>