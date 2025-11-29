// Este pequeno script valida o formulário de cadastro
// e exibe um alerta informando que a conta foi criada com sucesso.

document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o recarregamento automático da página

    // Captura os dados inseridos
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const categoria = document.getElementById("categoria").value;

    // Verifica se todos os campos foram preenchidos
    if (email && senha && categoria) {
        alert("Conta criada com sucesso para " + email + " como " + categoria + "!");
        this.reset(); // Limpa os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos antes de continuar.");
    }
});