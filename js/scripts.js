/* ======================= scripts.js (unificado) ======================= */
/* Arquivo gerado automaticamente a partir de:
   - cadastro/cadastro_js.js
   - patrocinado/patrocinado_js.js
   - contato/contato_js.js (vazio)
   - pagina inicial/js.js (vazio)
*/

/* ------------------ cadastro/cadastro_js.js ------------------ */
document.addEventListener('DOMContentLoaded', function () {
  const cadastroForm = document.getElementById("cadastroForm");
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Impede o recarregamento automático da página
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const categoria = document.getElementById("categoria").value;

      if (email && senha && categoria) {
        alert("Conta criada com sucesso para " + email + " como " + categoria + "!");
        this.reset(); // Limpa os campos do formulário
      } else {
        alert("Por favor, preencha todos os campos antes de continuar.");
      }
    });
  }

  /* ------------------ patrocinado/patrocinado_js.js ------------------ */
  const corpoLista = document.getElementById("listaPatrocinados");
  if (corpoLista) {
    // Lista inicial
    const patrocinados = [
      { id: "01", nome: "Projeto de Energias renováveis no semiárido", categoria: "Energia", data: "11/07/2025" },
      { id: "02", nome: "Influencer de games nacionais", categoria: "Influencers", data: "24/08/2025" },
      { id: "03", nome: "Plantar 10 mil árvores no Pantanal", categoria: "Ciências", data: "15/09/2025" },
      { id: "04", nome: "Construção mansões para vender em SP", categoria: "Negócios", data: "08/10/2025" },
      { id: "05", nome: "Canal de curiosidades no YouTube", categoria: "YouTube", data: "29/10/2025" },
      { id: "06", nome: "5% em ações da minha empresa de engenharia", categoria: "Negócios", data: "10/11/2025" },
    ];

    function atualizarTabela() {
      corpoLista.innerHTML = "";
      patrocinados.forEach(item => {
        corpoLista.innerHTML += `\n        <tr>\n            <td><input type="checkbox"></td>\n            <td>${item.id}</td>\n            <td>${item.nome}</td>\n            <td>${item.categoria}</td>\n            <td>${item.data}</td>\n            <td>\n                <img src="icons/eye.png" class="icone" title="Visualizar">\n                <img src="icons/edit.png" class="icone" title="Editar">\n                <img src="icons/delete.png" class="icone" title="Excluir">\n            </td>\n        </tr>\n        `;
      });
    }

    atualizarTabela();

    const btnListar = document.getElementById("btnListar");
    if (btnListar) btnListar.onclick = () => { atualizarTabela(); alert("Lista atualizada!"); };
    const btnAdicionar = document.getElementById("btnAdicionar");
    if (btnAdicionar) btnAdicionar.onclick = () => { alert("Função de adicionar futuro formulário."); };
    const btnEditar = document.getElementById("btnEditar");
    if (btnEditar) btnEditar.onclick = () => { alert("Selecione um item para editar."); };
    const btnExcluir = document.getElementById("btnExcluir");
    if (btnExcluir) btnExcluir.onclick = () => { alert("Selecione um item para excluir."); };
  }

  /* contato JS e pagina inicial JS são vazios — mantidos caso adicione funções no futuro */
});
