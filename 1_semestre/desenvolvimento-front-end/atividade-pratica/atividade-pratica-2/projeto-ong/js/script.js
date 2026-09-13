// Máscara de CPF (000.000.000-00)
function mascaraCPF(input) {
  let v = input.value.replace(/\D/g, ""); // Remove tudo que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  input.value = v;
}

// Máscara de Telefone ((00) 00000-0000)
function mascaraTelefone(input) {
  let v = input.value.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  input.value = v;
}

// Máscara de CEP (00000-000)
function mascaraCEP(input) {
  let v = input.value.replace(/\D/g, "");
  v = v.replace(/^(\d{5})(\d)/, "$1-$2");
  input.value = v;
}
