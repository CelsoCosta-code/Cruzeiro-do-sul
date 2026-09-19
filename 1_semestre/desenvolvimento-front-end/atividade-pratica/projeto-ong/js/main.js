import { templates } from "./templates.js";
import { inicializarCadastro } from "./cadastro.js";

const containerApp = document.getElementById("conteudo-app");

function carregarPagina(nomeDaPagina) {
  // Injeta o HTML do template correspondente dentro da tag <main>
  containerApp.innerHTML = templates[nomeDaPagina];

  // Reativa os eventos de cliques
  atualizarLinksNavegacao();

  //Prepara o terreno para o próximo passo do roteiro
  if (nomeDaPagina === "cadastro") {
    console.log(
      "Página de cadastro renderizada. Pronta para conecar o LocalStorage",
    );
    inicializarCadastro(); // Chama a função de inicialização do cadastro

    // TODO - Chamaremos a função de validação e salvemento aqui
  }
}

function atualizarLinksNavegacao() {
  const linksNav = document.querySelectorAll(".link-nav");

  linksNav.forEach((link) => {
    // Substitui o elemento por um clone dele mesmo para limpar eventos antigos e evitar duplicações
    const novoLink = link.cloneNode(true);
    link.replaceWith(novoLink);

    novoLink.addEventListener("click", function (evento) {
      evento.preventDefault(); // Impede o recarregamento da página

      const paginaAlvo = novoLink.getAttribute("data-page");
      carregarPagina(paginaAlvo);
    });
  });
}

// Inicializar a aplicação carregando a página inicial assim que o nevegador lê o script
document.addEventListener("DOMContentLoaded", () => {
  carregarPagina("inicio");
});
