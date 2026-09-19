export const templates = {
  inicio: `
    <h1>Transformando Vidas por meio da Solidariedade</h1>
    <p>
      Bem-vindo à ONG Esperança. Nosso propósito é levar dignidade e 
      oportunidades para comunidades em sitação de vulnerabilidade.
    </p>
    <section>
        <h2>Nossa Missão</h2>
        <p>
          Atuar de forma transparente e contínua no combate à fome e na promoção
          da educaçãoo, conectando quem deseja ajudar com quem mais precisa.
        </p>
    </section>
    `,

  projetos: `
    <h1>Conheça Nossas Iniciativas Solidárias</h1>
    <section>
      <h2>Projetos em Andamento</h2>
      <div class="container-grid">
        <article class="item-grid terco">
          <span class="badge badge-urgente">Alta Prioridade</span>
          <h3>Projeto Sopão Solidário</h3>
          <p>Distribuição de refeições nutritivas para pessoas em situação de rua.</p>
          <h4>Requisitos para Voluntariado:</h4>
          <ul>
            <li>Disponibilidade aos sábados pela manhã.</li>
            <li>Trabalho em equipe.</li>
          </ul>
          <a href="#" data-pagina="cadastro" class="link-nav">Quero ser Voluntário</a>
        </article>

        <article class="item-grid terco">
          <span class="badge badge-aberto">Vagas Abertas</span>
          <h3>Projeto Corte Solidário</h3>
          <p>Devolvendo a autoestima através de cortes de cabelo gratuitos em comunidades carentes.</p>
          <h4>Requisitos para Voluntariado:</h4>
          <ul>
            <li>Experiência básica em barbearia/cabeleireiro.</li>
            <li>Levar equipamento próprio.</li>
          </ul>
          <a href="#" data-pagina="cadastro" class="link-nav">Quero ser Voluntário</a>
        </article>

        <article class="item-grid terco">
          <span class="badge badge-aberto">Vagas Abertas</span>
          <h3>Inclusão Digital para Jovens</h3>
          <p>Aulas de alfabetização digital e lógica de programação básica para o mercado de trabalho.</p>
          <h4>Requisitos para Voluntariado:</h4>
          <ul>
            <li>Conhecimento básico em informática/lógica.</li>
            <li>Boa comunicação.</li>
          </ul>
          <a href="#" data-pagina="cadastro" class="link-nav">Quero ser Voluntário</a>
        </article>
      </div>
    </section>

    <h2>Como Apoiar Financeiramente</h2>
    <article style="max-width: 600px; margin: 0 auto">
      <h3>Doação via PIX</h3>
      <p>Mantenha nossos projetos ativos com qualquer valor.</p>
      <p><strong>Chave PIX (CNPJ):</strong> 00.000.000/0001-00</p>
    </article>
  `,

  cadastro: `
    <h1>Seja um Voluntário</h1>
    <p>Preencha os dados abaixo para fazer parte da nossa equipe.</p>
    <section>
      <form id="form-cadastro">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" required placeholder="Seu nome">
          
          <label for="email">E-mail:</label>
          <input type="email" id="email" required placeholder="seu@email.com">
          
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" required placeholder="(00) 00000-0000">
        </fieldset>
        
        <button type="submit" id="btn-enviar">Enviar Cadastro</button>
      </form>
    </section>
  `,
};
