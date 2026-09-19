export function inicializarCadastro() {
  const formulario = document.getElementById("form-cadastro");

  // Se por acaso a função for chamada e o formulário não existir, aborta para não dar erro
  if (!formulario) return;

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário

    // Capturar os valores digitados e limpar os espaços em branco
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // Validando os campos obrigatórios
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Objeto que vai para o banco de dados
    const novoVoluntario = {
      id: Date.now(), // Gera um ID único baseado no timestamp atual
      nome: nome,
      email: email,
      telefone: telefone,
    };

    // Conectando com o banco de dados (localStorage)
    // Tenta puxar a lista que já existe. Se não existir, cria uma lista vazia []
    let dataVoluntarios =
      JSON.parse(localStorage.getItem("bd_ong_esperanca")) || [];

    // Adiciona o novo voluntário à lista
    dataVoluntarios.push(novoVoluntario);

    // Salva a lista atualizada de volta no localStorage
    localStorage.setItem("bd_ong_esperanca", JSON.stringify(dataVoluntarios));

    // Limpa o formulário após o envio
    formulario.reset();
    // Feedback para o usuário
    alert("Cadastro realizado com sucesso!");
  });
}
