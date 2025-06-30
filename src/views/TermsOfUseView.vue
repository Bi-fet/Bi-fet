<template>
  <div class="page">
    <!-- Cabeçalho -->
    <header class="navbar-container">
  <router-link to="/" class="logo-link">
    <img src="../assets/images/bifet-logo.svg" alt="Logo da BI-FET" class="navbar-logo" />
  </router-link>
</header>
<hr class="navbar-divider" />

    <!-- Conteúdo principal -->
    <div class="main-content">
      <!-- Menu lateral -->
      <aside class="sidebar">
        <ul>
           <li v-for="section in sections" :key="section.id">
            <a
              :href="'#' + section.id"
              :class="{ active: activeSections.has(section.id) }"
            >
              {{ section.label }}
            </a>
          </li>
        </ul>
      </aside>

      <!-- Conteúdo dos termos -->
      <div class="terms-content">
        <h1 id="inicio">Termos de Uso — Bi-FET</h1>

        <p class="validity termo_p">
          BI-FET, pessoa jurídica de direito privado descreve, através deste documento, as regras de uso do site
          <a href="https://bi-fet.github.io/bifet/#/" target="_blank">https://bi-fet.github.io/bifet/#/</a>
          e qualquer outro site ou aplicativo operado pelo proprietário.
        </p>
        <p class="termo_p">Ao navegar neste website, consideramos que você está de acordo com os Termos de Uso abaixo.</p>
        <p class="termo_p">Caso você não esteja de acordo com as condições deste contrato, pedimos que não faça mais uso deste website, muito menos cadastre-se ou envie os seus dados pessoais.</p>
        <p class="termo_p">Se modificarmos nossos Termos de Uso, publicaremos o novo texto neste website, com a data de revisão atualizada. Podemos alterar este documento a qualquer momento. Caso haja alteração significativa, poderemos informá-lo por e-mail ou por notificações.</p>
        <p class="termo_p">A utilização deste website após as alterações significa que você aceitou os Termos de Uso revisados. Caso, após a leitura, não esteja de acordo, favor encerrar seu acesso.</p>

        <section v-for="section in sections" :id="section.id" :key="section.id">
          <h2>{{ section.label }}</h2>
          <div v-html="section.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const sections = [
  {
    id: 'usuario',
    label: 'Usuário',
    content: `
      <p class="termo_p">A utilização deste website atribui de forma automática a condição de Usuário e implica a plena aceitação de todas as diretrizes e condições incluídas nestes Termos.</p>
    `,
  },
  {
    id: 'adesao',
    label: 'Adesão à Política de Privacidade',
    content: `
      <p class="termo_p">A utilização deste website acarreta a adesão aos presentes Termos de Uso e à versão mais atualizada da Política de Privacidade de BI-FET.</p>
    `,
  },
  {
    id: 'acesso',
    label: 'Condições de acesso',
    content: `
      <p class="termo_p">Em geral, o acesso ao website da BI-FET possui caráter gratuito e não exige prévia inscrição ou registro.</p>
      <p class="termo_p">Contudo, para usufruir de algumas funcionalidades, o usuário poderá precisar efetuar um cadastro, criando uma conta com login e senha próprios.</p>
      <p class="termo_p">É responsabilidade do usuário fornecer apenas informações corretas, válidas e atualizadas, bem como não divulgar seu login e senha a terceiros.</p>
      <p class="termo_p">Partes deste site oferecem ao usuário a opção de publicar comentários. A BI-FET não consente com conteúdos discriminatórios, ofensivos, ilícitos ou que infrinjam direitos de terceiros.</p>
      <p class="termo_p">O envio de conteúdos implica em licença irrevogável para uso e reprodução pela BI-FET em suas plataformas.</p>
    `,
  },
  {
    id: 'cookies',
    label: 'Cookies',
    content: `
      <p class="termo_p">Utilizamos cookies para coletar informações de navegação, como tipo de navegador, tempo de uso e preferências de idioma.</p>
      <p class="termo_p">Essas informações são usadas para proteger a segurança, facilitar a navegação e personalizar sua experiência.</p>
      <p class="termo_p">Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.</p>
      <p class="termo_p">Rejeitamos qualquer responsabilidade por consequências resultantes da desativação de cookies.</p>
    `,
  },
  {
    id: 'propriedade',
    label: 'Propriedade Intelectual',
    content: `
      <p class="termo_p">Todos os elementos do site BI-FET são de propriedade intelectual da empresa ou de seus licenciados.</p>
      <p class="termo_p">Estes Termos não concedem qualquer direito de uso desses elementos ao usuário.</p>
    `,
  },
  {
    id: 'links-terceiros',
    label: 'Links para sites de terceiros',
    content: `
      <p class="termo_p">O site pode conter links para sites de parceiros, anunciantes ou fornecedores. Cada site possui suas próprias políticas de privacidade.</p>
      <p class="termo_p">Não nos responsabilizamos por políticas e práticas de outras organizações, como Facebook, Google, Apple etc.</p>
      <p class="termo_p">Recomendamos que o usuário leia os termos e políticas de cada site visitado.</p>
    `,
  },
  {
    id: 'prazo-alteracoes',
    label: 'Prazos e alterações',
    content: `
      <p class="termo_p">Este website tem funcionamento por prazo indeterminado.</p>
      <p class="termo_p">Pode ser encerrado, suspenso ou modificado a qualquer momento pela BI-FET, sem aviso prévio.</p>
    `,
  },
  {
    id: 'dados-pessoais',
    label: 'Dados pessoais',
    content: `
      <p class="termo_p">Durante a utilização do website, certos dados pessoais podem ser coletados e tratados pela BI-FET ou seus parceiros.</p>
      <p class="termo_p">As regras para tratamento de dados estão detalhadas na Política de Privacidade.</p>
    `,
  },
  {
    id: 'contato',
    label: 'Contato',
    content: `
      <p class="termo_p">Caso você tenha qualquer dúvida sobre os Termos de Uso, entre em contato pelo e-mail <a href="mailto:bifet25@gmail.com">bifet25@gmail.com</a>.</p>
    `,
  },
]

const activeSections = ref(new Set())

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth' // Scroll suave ao clicar

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id
        if (entry.isIntersecting) {
          activeSections.value.add(id)
        } else {
          activeSections.value.delete(id)
        }
      })
    },
    {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    }
  )

  sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})
</script>


<style>
.page {
 display: flex;
  flex-direction: column;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 3rem;
  font-family: var(--font-family-sans-serif);
  background-color: #fff
}

.navbar-logo {
  height: 50px;
}

.navbar-divider {
  border: none;
  border-bottom: 1px solid #ddd;
  margin: 0;
}

.logo {
  height: 32px;
}

.main-content {
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  color: var(--text-color);
  font-size: 0.9375rem;
  display: block;
  padding-left: 0.5rem;
  border-left: 3px solid transparent;
  text-decoration: none;
  transition: color 0.3s, border-left-color 0.3s;
}

.sidebar a:hover {
  color: var(--btn-hover);
}

.sidebar a.active {
  color: var(--btn-hover);
  font-weight: bold;
  border-left-color: var(--btn-hover);
}

.terms-content {
  flex: 1;
  padding-left: 2rem;
}

.terms-content h1 {
  font-size: var(--font-size-title);
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.terms-content h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: var(--font-size-subtitle);
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}
.terms-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.terms-content ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.terms-content li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: var(--font-size-base);
  line-height: 1.6;
}
.validity {
  font-size: 0.875rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.termo_p {
  font-size: var(--font-size-base);
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1rem;
}

a {
  color: var(--link-color);
}

a:hover {
  color: var(--link-active);
  text-decoration: underline;
}

/* Responsivo */
@media (max-width: 768px) {
  .main-content {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar {
    width: 100%;
    max-height: initial;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 1rem;
    position: relative;
    overflow-y: auto;
  }

  .sidebar ul {
    display: block;
    padding-left: 0;
  }

  .sidebar li {
    margin-bottom: 0.75rem;
    list-style: none;
  }

  .sidebar a {
    display: block;
    padding-left: 0.5rem;
    font-size: 0.95rem;
    border-left: 3px solid transparent;
  }

  .terms-content {
    width: 100%;
    padding: 1rem;
  }
}
</style>
