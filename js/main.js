const nomes = [];
const idade = [];
const genero = [];
let numSorteado;

function exibe() {
    let card = "<div id='cards-" + nomes.length + "' class='card-" + nomes.length + "'>" +
        "<ul><strong>Cadastro: " + nomes.length + "</strong>" +
        "<li><strong>Nome:</strong> " + nomes[nomes.length - 1] + "</li >" +
        "<li><strong>Idade:</strong> " + idade[idade.length - 1] + "</li>" +
        "<li><strong>Gênero:</strong> " + genero[genero.length - 1] + "</li>" +
        "</ul>" +
        "</div>";

    document.getElementById("cadastro").innerHTML += card;

}
function cadastra() {
    cadastraNome();
    cadastraIdade();
    cadastraGeneros();
    exibe();
}
function cadastraNome() {
    nomes.push(document.getElementById("nomeInput").value);
    document.getElementById("nomeInput").value = "";
    console.log(nomes);
}
function cadastraIdade() {
    idade.push(document.getElementById("idadetInput").value);
    document.getElementById("idadetInput").value = "";
    console.log(idade);
}
function cadastraGeneros() {
    genero.push(document.getElementById("genero").value);
    document.getElementById("genero").value = "";
    console.log(genero);
}
function sorteado() {

    let cardSorteado = document.getElementById('cards-' + sorteia()).innerHTML;
    document.getElementById("cadastroSorteado").classList.add('divCadastro', 'cardGreen'); document.getElementById("cadastroSorteado").innerHTML += cardSorteado;


}
function alteraCor() {
    document.getElementById('cards-' + numSorteado).classList.add("cardYellow");
}

function sorteia() {
    numSorteado = Math.floor(Math.random() * nomes.length + 1);
    return numSorteado;
}
function sortear() {
    limpar()
    sorteado();
    alteraCor();
    console.log(numSorteado);
}
function limpar() {
    document.getElementById("cadastroSorteado").innerHTML = '';
}
