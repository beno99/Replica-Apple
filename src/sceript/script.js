const imagemVizualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

const miniaturaImage0 = document.getElementById("0-imagem-miniatura");
const miniaturaImage1 = document.getElementById("1-imagem-miniatura");
const miniaturaImage2 = document.getElementById("2-imagem-miniatura");


const verdeCipreste = {
    nome:"Verde-Cipreste" ,
    pasta:"imagens-verde-cipreste"
}
const azulInverno = {
    nome:"Azul-inverno" ,
    pasta:"imagens-azul-inverno"
}
const meiaNoite = {
    nome:"Meia-noite" ,
    pasta:"imagens-meia-noite"
}
const estelar = {
    nome:"Estelar" ,
    pasta:"imagens-estelar"
}
const rosaClaro = {
    nome:"Rosa-claro" ,
    pasta:"imagens-rosa-claro"
}

const opicoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];

const opcoesTamanho = ["41mm","45mm"];

// variavel de conrole
let imagemSelecionada = 1;
let tamanhoCelecionado = 1;
let corSelecionada = 1;
function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0); 
    imagemVizualizacao.src= "./imagens/opcoes-cores/"+opicoesCores[corSelecionada].pasta +"/imagem-" + imagemSelecionada + ".jpeg"
}

function trocarTamanho(){
    const idOpcaoSelecionda = document.querySelector('[name= "opcao-tamanho"]:checked').id;
    tamanhoCelecionado = idOpcaoSelecionda.charAt(0);
    tituloProduto.innerText = `Pulseira loop esportiva ${opicoesCores[corSelecionada].nome} para caixa de  ${opcoesTamanho[tamanhoCelecionado]};` 
    if (opcoesTamanho[tamanhoCelecionado] === "41mm"){
        imagemVizualizacao.classList.add('caixa-pequena')
    } else {
        imagemVizualizacao.classList.remove('caixa-pequena')
    }
  
}

function trocarCor(){
   const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
   corSelecionada = idOpcaoSelecionada.charAt(0);
   tituloProduto.innerText = `Pulseira loop esportiva ${opicoesCores[corSelecionada].nome} para caixa de  ${opcoesTamanho[tamanhoCelecionado]};` 
   nomeCorSelecionada.innerText="Cor- " + opicoesCores[corSelecionada].nome;
   miniaturaImage0.src= "./imagens/opcoes-cores/${opicoesCores[corSelecionada].pasta}/imagem-0.jpeg;"
   miniaturaImage1.src= "./imagens/opcoes-cores/${opicoesCores[corSelecionada].pasta}/imagem-1.jpeg;"
   miniaturaImage2.src= "./imagens/opcoes-cores/${opicoesCores[corSelecionada].pasta}/imagem-2.jpeg;"
   
   imagemVizualizacao.src= "./imagens/opcoes-cores/"+opicoesCores[corSelecionada].pasta +"/imagem-" + imagemSelecionada + ".jpeg"

}