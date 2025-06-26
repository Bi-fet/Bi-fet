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
        <p class="a-p">© 2025 BI-FET. Todos os direitos reservados.</p>
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

.a-p{
    color: var(--btn-text);
    text-align: center;
    margin-top: 24px;
}
</style>
