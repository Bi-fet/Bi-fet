<template>
    <section class="product-container" id="product">
        <h1 class="title">Nosso Produto</h1>
        <section class="product-principal">
            <div class="product-right">
                <p class="text">Seu <strong>consultor financeiro, com o nome da sua empresa</strong>.
                    Nosso agente inteligente analisa os dados do seu negócio e entrega <strong>respostas rápidas e
                        práticas</strong>: o
                    porquê dos seus resultados e como melhorar. Tudo com uma <strong>interface simples</strong> e que se
                    <strong>adapta à identidade
                        da sua marca</strong>.
                </p>
                <p class="text">
                    <strong>Nossos Diferenciais</strong>:
                    Inteligência Consultiva
                    Interface Simples
                    100% Personalizável (até no nome)
                    Acesso via web, onde você estiver
                </p>
            </div>
            <img src="../assets/images/chart-big.svg"
                alt="Um gráfico com 2 porcentagens saindo. Com emojis: feliz, neutro, triste, gostei e não gostei.">
        </section>
        <section>
            <div class="product-secondary">
                <h2 class="subtitle">Por que escolher a BI-FET?</h2>
                <div class="cards">
                    <div class="card-item">
                        <h3 class="card-title">Inteligência 24/7</h3>
                        <p class="texts">Chatbots que <strong>aprendem com seus dados</strong> e respondem como um
                            especialista humano - só que <strong>24/7</strong>.</p>
                        <img src="../assets/images/icon1.svg" alt="Um cérebro azul com engrenagens cinza atrás.">
                    </div>
                    <div class="card-item">
                        <h3 class="card-title">Insights Acionáveis</h3>
                        <p class="texts">Não entregamos apenas números: explicamos o “porquê” e <strong>sugerimos o que
                                fazer</strong>.
                        </p>
                        <img src="../assets/images/icon2.svg"
                            alt="Uma mulher com um lápis gigante desenhando um gráfico, com vários tipos de gráficos ao seu redor.">
                    </div>
                    <div class="card-item">
                        <h3 class="card-title">Decisões Rápidas</h3>
                        <p class="texts">De dados brutos a <strong>decisões estratégicas em minutos</strong>, não
                            semanas
                        </p>
                        <img src="../assets/images/icon3.svg"
                            alt="Funcionário de escritório subindo escadas ao lado de um alvo com uma flecha no meio.">
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style>
.product-container {
    margin: 120px 210px;
}

.product-principal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 200px;
    margin-bottom: 120px;
}

.product-principal img {
    width: 420px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    justify-content: center;
    margin-top: 60px;
}

.card-item {
    display: flex;
    flex-direction: column;
    background-color: var(--card-color);
    padding: 20px 40px;
    border-radius: var(--border-radius-large);
    gap: 28px;
    justify-content: center;
    align-items: center;
}

.card-item:hover {
    scale: 1.1;
}

.card-title {
    color: var(--btn-text);
    font-family: var(--font-family-sans-serif);
    font-weight: var(--font-weight-bold);
    text-align: center;
}

.card-item .texts {
    flex-wrap: wrap;
    font-size: var(--font-size-base);
    font-family: var(--font-family-sans-serif);
    text-align: justify;
    color: var(--btn-text);
    line-height: 1.6;
}

.card-item img {
    width: 130px;
    height: 116px;
}

@media (max-width: 1024px) {
    .product-container {
        margin: 80px 60px;
    }

    .product-principal {
        gap: 100px;
    }

    .product-principal img {
        width: 320px;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .product-container {
        margin: 60px 40px;
    }

    .product-principal {
        flex-direction: column;
        gap: 40px;
        margin-bottom: 80px;
    }

    .product-principal img {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
    }

    .product-right {
        width: 100%;
    }

    .cards {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .card-item {
        padding: 20px;
    }

    .card-item img {
        width: 100px;
        height: 90px;
    }
}

@media (max-width: 480px) {
    .product-container {
        margin: 40px 20px;
    }

    .product-principal {
        gap: 30px;
        margin-bottom: 60px;
    }

    .card-item {
        padding: 15px;
    }

    .card-title {
        font-size: 1.125rem;
    }

    .card-item .texts {
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .card-item img {
        width: 80px;
        height: 72px;
    }
}
</style>