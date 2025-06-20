<template>
    <div class="about-container">
        <h1 class="title">Sobre Nós</h1>
        <div class="text">
            <p>Na BI-FET, acreditamos que todo negócio, independentemente do tamanho, merece inteligência financeira de
                ponta.
                Nascemos para <strong>facilitar o acesso a análises estratégicas avançadas</strong>. Empoderamos
                pequenas e médias
                empresas com uma tecnologia acessível e clara, pois sabemos que a falta de recursos e a complexidade dos
                dados podem limitar o crescimento.
                Nosso compromisso é ir além dos números. Queremos ajudar você, empreendedor, a <strong>enxergar o que
                    realmente
                    está por trás dos resultados</strong>: identificar oportunidades, prever riscos, otimizar gargalos e
                traçar
                caminhos sólidos para o crescimento do seu negócio.
                Porque a inteligência de dados não é um privilégio, mas uma <strong>ferramenta de poder</strong>. Ela
                deve estar nas mãos
                de quem realmente faz a economia acontecer, para que cada PME não apenas sobreviva, mas <strong>prospere
                    e
                    construa seu futuro</strong> com confiança. Conte com a BI-FET para <strong>transformar seus dados
                    em seu maior ativo
                    estratégico</strong>.</p>
        </div>
        <section class="about-pillars">
            <div class="mission-pillar">
                <h2 class="subtitle">Nossa Missão</h2>
                <p class="text">Simplificamos a gestão financeira das PMEs, transformando dados em insights estratégicos
                    por meio de soluções automatizadas, acessíveis e fáceis de usar.</p>
            </div>
            <div class="vision-pillar">
                <h2 class="subtitle">Nossa Visão</h2>
                <p class="text">Ser reconhecido como o parceiro essencial para o crescimento sustentável dos negócios,
                    redefinindo a relação das empresas com seus dados financeiros.</p>
            </div>
        </section>
        <section class="about-values">
            <h2 class="subtitle sub">Nossos Valores</h2>
            <div class="values">
                <div class="value-item">
                    <img src="../assets/images/handshake-icon.svg" alt="Ícone de aperto de mãos.">
                    <h3 class="values-title">Foco no Cliente</h3>
                    <p class="text">Seu sucesso é nossa prioridade. Criamos soluções que respondem às suas necessidades reais.</p>
                </div>
                <div class="value-item">
                    <img src="../assets/images/inovation-icon.svg" alt="Ícone de uma lâmpada e a palavra AI no meio.">
                    <h3 class="values-title">Inovação Contínua</h3>
                    <p class="text">Sempre à frente, usamos IA para análises financeiras mais inteligentes e estratégicas</p>
                </div>
                <div class="value-item">
                    <img src="../assets/images/magnifying-glass-icon.svg" alt="Ícone de um olho com uma lupa no meio.">
                    <h3 class="values-title">Transparência e Ética</h3>
                    <p class="text">Contruímos confiança com clareza e integridade em cada recomendação.</p>
                </div>
                <div class="value-item">
                    <img src="../assets/images/simplicity-icon.svg" alt="Ícone de um cubo e setas em formato circular ao redor.">
                    <h3 class="values-title">Simplicidade</h3>
                    <p class="text">Descomplicamos o financeiro, transformando dados complexos em insights fáceis de usar.</p>
                </div>
                <div class="value-item">
                    <img src="../assets/images/confidentiality-icon.svg" alt="Ícone de uma medalha.">
                    <h3 class="values-title">Confiabilidade</h3>
                    <p class="text">Geramos informações precisas e consistentes para que suas decisões sejam sempre sólidas</p>
                </div>
                <div class="value-item">
                    <img src="../assets/images/security-icon.svg" alt="Ícone de um escudo com um cadeado no meio.">
                    <h3 class="values-title">Segurança e Privacidade</h3>
                    <p class="text">Seus dados são a nossa maior responsabilidade. Garantimos proteção rigorosa e total confidencialidade.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.about-container {
    margin: 120px 210px;
}

.title {
    font-size: var(--font-size-title);
    font-family: var(--font-family-serif);
    font-weight: 600;
    text-align: center;
    margin-bottom: 60px;
    color: var(--primary-color);
}

.text {
    font-size: var(--font-size-base);
    font-family: var(--font-family-sans-serif);
    text-align: justify;
    color: var(--text-color);
    line-height: 1.6;
}

.about-pillars {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
}

.subtitle {
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    color: var(--primary-color);
    margin-bottom: 24px;
    text-align: center;
}

.mission-pillar {
    flex: 1;
    padding-right: 20px;
    position: relative;
}

.mission-pillar::after {
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    right: 0;
    width: 1px;
    background-color: var(--text-color);
}

.vision-pillar {
    flex: 1;
    padding-left: 20px;
}

.sub {
    margin-top: 60px;
}

.values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: start;
    gap: 20px;
}

.value-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
}

.value-item:hover {
    background-color: rgba(156, 166, 252, 0.2);
    padding: 30px 0px 30px 30px;
    border-radius: var(--border-radius-medium);
}

.value-item img{
    margin-bottom: 16px;
    width: 50px;
    height: 40px;
    align-items: center;
}

.values-title {
    font-family: var(--font-family-sans-serif);
    font-size: 1.125rem;
    margin-bottom: 16px;
    color: var(--text-color);
}

.value-item p {
    margin-right: 50px;
    color: var(--text-color);
    line-height: 1.6;
}
</style>