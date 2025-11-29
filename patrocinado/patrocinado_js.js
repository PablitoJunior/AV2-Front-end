// Lista inicial
const patrocinados = [
    { id: "01", nome: "Projeto de Energias renováveis no semiárido", categoria: "Energia", data: "11/07/2025" },
    { id: "02", nome: "Influencer de games nacionais", categoria: "Influencers", data: "24/08/2025" },
    { id: "03", nome: "Plantar 10 mil árvores no Pantanal", categoria: "Ciências", data: "15/09/2025" },
    { id: "04", nome: "Construção mansões para vender em SP", categoria: "Negócios", data: "08/10/2025" },
    { id: "05", nome: "Canal de curiosidades no YouTube", categoria: "YouTube", data: "29/10/2025" },
    { id: "06", nome: "5% em ações da minha empresa de engenharia", categoria: "Negócios", data: "10/11/2025" },
];


// Renderizar tabela
function atualizarTabela() {
    const corpo = document.getElementById("listaPatrocinados");
    corpo.innerHTML = "";

    patrocinados.forEach(item => {
        corpo.innerHTML += `
        <tr>
            <td><input type="checkbox"></td>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.categoria}</td>
            <td>${item.data}</td>
            <td>
                <img src="icons/eye.png" class="icone" title="Visualizar">
                <img src="icons/edit.png" class="icone" title="Editar">
                <img src="icons/delete.png" class="icone" title="Excluir">
            </td>
        </tr>
        `;
    });
}

atualizarTabela();


// Botões superiores (funções simples de exemplo)
document.getElementById("btnListar").onclick = () => {
    atualizarTabela();
    alert("Lista atualizada!");
};

document.getElementById("btnAdicionar").onclick = () => {
    alert("Função de adicionar futuro formulário.");
};

document.getElementById("btnEditar").onclick = () => {
    alert("Selecione um item para editar.");
};

document.getElementById("btnExcluir").onclick = () => {
    alert("Selecione um item para excluir.");
};