# ONG Esperança - Single Page Application (SPA)

Plataforma digital responsiva e reativa desenvolvida para apoiar a ONG Esperança, facilitando a divulgação de projetos sociais e a captação de novos voluntários.

## Arquitetura e Tecnologias

O projeto foi construído utilizando Vanilla JavaScript moderno (ES6 Modules) sem a dependência de frameworks pesados, garantindo alta performance e baixo acoplamento.

- **HTML5 & CSS3:** Marcação semântica e estilização componentizada.
- **JavaScript (ES6):** Modularização em arquivos independentes (`main.js`, `templates.js`, `cadastro.js`).
- **Web Storage API:** Persistência de dados em formato JSON no navegador (`localStorage`).
- **SweetAlert2:** Biblioteca externa via CDN para feedbacks visuais customizados e não-bloqueantes.

## Estrutura de Módulos (Princípio da Responsabilidade Única)

A aplicação adota uma arquitetura descentralizada para garantir manutenção escalável:

1. **templates.js:** Isola estritamente a camada de visão, exportando fragmentos literais de HTML.
2. **cadastro.js:** Concentra as regras de negócio, a validação preventiva de formulários e a injeção/recuperação de dados no banco local.
3. **main.js:** Atua como orquestrador/roteador, interceptando eventos de navegação, prevenindo o recarregamento natural da página e manipulando o DOM programaticamente.

## Instalação e Execução

1. Clone este repositório para sua máquina local.
2. Abra o diretório raiz do projeto no seu editor de código (recomendado: VS Code).
3. **Nota sobre CORS:** Devido à utilização de ES6 Modules nativos, o arquivo `index.html` não deve ser aberto diretamente pelo sistema de arquivos (`file://`). Utilize um servidor local, como a extensão _Live Server_ ou via terminal (`python3 -m http.server`).
4. Acesse o endereço correspondente no navegador (ex: `http://localhost:5500` ou `http://localhost:8000`).
