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

      <!-- Conteúdo da política -->
      <div class="terms-content">
        <h1 id="inicio">POLÍTICA DE PRIVACIDADE — Bi-FET</h1>

        <section v-for="section in sections" :id="section.id" :key="section.id">
          <h2>{{ section.label }}</h2>
          <div v-html="section.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeSections = ref(new Set())

const sections = [
  {
    id: 'introducao',
    label: 'Introdução',
    content: `<p class="termo_p">Esta política de privacidade é válida a partir de junho de 2025. A Bi-FET, pessoa jurídica de direito privado, com sede na RUA E, número 22, bairro Candeias – Vitória da Conquista - Bahia, inscrita no CNPJ/MF sob o nº 01.001.000/0001-00 (“BI-FET” ou “nós”), é uma startup dedicada ao desenvolvimento de software de análise financeira com inteligência artificial, incluindo um chatbot especializado.  Levamos a sua privacidade a sério e zelamos pela segurança e proteção de dados de todos os nossos usuários, parceiros e demais envolvidos (“Usuários” ou “você”) que interajam com nosso site, plataformas, protótipos ou demais interfaces digitais operadas pela Bi-FET (aqui designadas, simplesmente, “Plataformas”).
              Esta Política de Privacidade (“Política de Privacidade”) destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas interações com nossas Plataformas e em mensagens que trocamos com você (“Comunicações”).
              </p>`
  },
  {
    id: 'consentimento',
    label: 'Consentimento do Usuário',
    content: `<p class="termo_p">AO ACESSAR AS PLATAFORMAS, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE ACORDO COM ESTA POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS QUE VOCÊ DISPONIBILIZAR NAS PLATAFORMAS.
              Esta Política de Privacidade fornece uma visão geral de nossas práticas de privacidade e das escolhas que você pode fazer, bem como direitos que você pode exercer em relação aos Dados Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados Pessoais, entre em contato com bifet25@gmail.com.
              Além disso, a Política de Privacidade não se aplica a quaisquer aplicativos, produtos, serviços, sites ou recursos de mídia social de terceiros que possam ser oferecidos ou acessados por meio de nossas Plataformas. O acesso a esses links fará com que você saia do ambiente da Bi-FET e possa resultar na coleta ou compartilhamento de informações sobre você por terceiros. Nós não controlamos, endossamos ou fazemos quaisquer representações sobre esses sites de terceiros ou suas práticas de privacidade, que podem ser diferentes das nossas. Recomendamos que você revise a política de privacidade de qualquer site com o qual você interaja antes de permitir a coleta e o uso de seus Dados Pessoais.
              Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você declara ter a competência para fazê-lo e declara ter obtido o consentimento necessário para autorizar o uso de tais informações nos termos desta Política de Privacidade </p>`
  },
  {
    id: 'definicoes',
    label: 'Definições',
    content: `<p class="termo_p">Para os fins desta Política de Privacidade:
                “Dados Pessoais” significa qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como por exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros;
                “Dados Pessoais Sensíveis” significa qualquer informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico;
                “Tratamento de Dados Pessoais” significa qualquer operação efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração, recuperação, consulta, utilização, divulgação por transmissão, disseminação ou, alternativamente, disponibilização, harmonização ou associação, restrição, eliminação ou destruição. Também é considerado Tratamento de Dados Pessoais qualquer outra operação prevista nos termos da legislação aplicável;
                “Leis de Proteção de Dados” significa todas as disposições legais que regulem o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais (“LGPD”).
              </p>`
  },
    {
  id: 'uso-dados',
  label: 'Uso de Dados Pessoais',
  content: `
    <p class="termo_p">
      Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo o chatbot na BI-FET, personalizando e melhorando sua experiência. Exemplos de como usamos os dados incluem:
    </p>
    <ul class="termo_p">
      <li>Viabilizar o uso do chatbot de análise financeira e de outras funcionalidades oferecidas pela Bi-FET;</li>
      <li>Oferecer suporte técnico e responder dúvidas, críticas ou sugestões enviadas por meio de formulários de contato;</li>
      <li>Realizar análises internas de desempenho do produto, segurança da informação, usabilidade e testes de novas funcionalidades;</li>
      <li>Cumprir obrigações legais e regulatórias aplicáveis ao desenvolvimento e operação de software;</li>
      <li>
        Entrar em contato por número de telefone e/ou e-mail fornecido, incluindo: mensagens de voz,
        equipamentos de discagem automática, mensagens de texto (SMS), e-mail ou outro meio que seu dispositivo suporte, conforme permitido por lei.
      </li>
    </ul>
    <p class="termo_p">Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada:</p>
    <ol class="termo_p" type="a">
      <li>nos termos das Leis de Proteção de Dados;</li>
      <li>para atender exigências de processo judicial;</li>
      <li>para cumprir decisão judicial, decisão regulatória ou decisão de autoridades competentes, incluindo autoridades fora do país de residência;</li>
      <li>para proteger nossas operações;</li>
      <li>para proteger direitos, privacidade, segurança nossos, seus ou de terceiros;</li>
      <li>para detectar e prevenir fraude;</li>
      <li>permitir-nos usar as ações disponíveis ou limitar danos que venhamos a sofrer;</li>
      <li>de outros modos permitidos por lei.</li>
    </ol>
    <p class="termo_p"><strong>NOSSO SISTEMA NÃO SE DESTINA A PESSOAS COM MENOS DE 18 (DEZOITO) ANOS E PEDIMOS QUE TAIS PESSOAS NÃO NOS FORNEÇAM QUALQUER DADO PESSOAL.</strong></p>
  `
},
  {
    id: 'compartilhamento',
    label: 'Compartilhamento com Terceiros',
    content: `<p class="termo_p">Nós poderemos compartilhar seus Dados Pessoais com: parceiros técnicos e fornecedores (...) venda ou incorporação da startup.</p>`
  },
  {
    id: 'transferencias',
    label: 'Transferências Internacionais',
    content: `<p class="termo_p">Dados Pessoais e informações de outras naturezas coletadas por nós podem ser transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas parceiras em todo o mundo (...)</p>`
  },
  {
    id: 'coleta-automatica',
    label: 'Coleta Automática de Dados',
    content: `<p class="termo_p">Quando você visita a Loja, ela pode armazenar ou recuperar informações em seu navegador, seja na forma de cookies (...) você precisará repetir este processo para cada computador e cada navegador.</p>`
  },
  {
    id: 'direitos',
    label: 'Direitos do Usuário',
    content: `<p class="termo_p">Você pode, a qualquer momento, requerer: (i) confirmação de que seus Dados Pessoais estão sendo tratados (...) (ix) revogação do consentimento.</p>`
  },
  {
    id: 'seguranca',
    label: 'Segurança dos Dados',
    content: `<p class="termo_p">Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados (...) favor nos notificar imediatamente.</p>`
  },
  {
    id: 'links',
    label: 'Links e Redes Sociais',
    content: `<p class="termo_p">A BI-FET poderá, de tempos em tempos, conter links de hipertexto que redireciona você para sites das redes dos nossos parceiros (...) recomendamos que você se informe sobre a política de privacidade de cada site visitado (...)</p>`
  },
  {
    id: 'atualizacoes',
    label: 'Atualizações da Política',
    content: `<p class="termo_p">Se modificarmos nossa Política de Privacidade, publicaremos o novo texto na BI-FET (...) Sua utilização do Sistema após as alterações significa que aceitou as Políticas de Privacidade revisadas.</p>`
  },
  {
    id: 'contato',
    label: 'Contato e Responsável',
    content: `<p class="termo_p">Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade (...) favor contatar-nos através do e-mail bifet25@gmail.com.</p>`
  }
]

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'

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

.sidebar {
  width: 220px;
  border-right: 1px solid #eee;
  padding-right: 1.5rem;
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}

.sidebar a {
  color: var(--link-color);
  font-size: 0.9375rem;
  display: block;
  padding-left: 0.5rem;
  border-left: 3px solid transparent;
  transition: color 0.3s, border-left-color 0.3s;
}

.sidebar a:hover {
  color: var(--btn-hover);
}

.sidebar a.active {
  color: var(--btn-hover);
  font-weight: var(--font-weight-medium);
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
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding-bottom: 1.25rem;
    border-right: none;
    border-bottom: 1px solid #eee;
  }

  .terms-content {
    padding-left: 0;
  }
}
</style>
