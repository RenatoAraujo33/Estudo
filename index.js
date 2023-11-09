function iniciar() {
    const botaoCarregar = document.getElementById("carregar");
    botaoCarregar.addEventListener('click', carregar);
}

async function carregar() {
    // const url = "dados.json";
    const url = "https://gist.githubusercontent.com/ermogenes/b28d49289db135bb5b5f9b0b31f1ba02/raw/657141e8f326352a44338654ebf1f456216070b5/dados.json";

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const mensagem = `Estou estudando ${dados.componente} no curso de ${dados.curso} da ${dados.escola}.`;
    exibir(mensagem, dados.professores);
}

function exibir(mensagem, professores) {
    const paragrafoMensagem = document.getElementById("mensagem");
    paragrafoMensagem.innerText = mensagem;

    const listaProfs = document.getElementById("professores");
    for(const prof of professores) {
        listaProfs.insertAdjacentHTML('beforeend', `<li>${prof}</li>`);
    }
}

document.addEventListener('DOMContentLoaded', iniciar);