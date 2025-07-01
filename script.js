let contador = document.getElementById("contador");
let dataInicio = new Date ("2004-01-01T00:00:00");

const box = document.querySelector(".carrossel"); //Aqui acessamos o carrossel para manipula-lo
const imagens = document.querySelectorAll(".carrossel img"); //Aqui acessamos as (All) img de carrossel para manipula-las
let contaImagem = 0;


function calculaTempo() 
{
    let dataAtual = new Date();
    
    let diferencaDatas = dataAtual - dataInicio;

    let anos = Math.floor(diferencaDatas / (1000 * 60 * 60 *24 *365));
    let meses = Math.floor((diferencaDatas) / (1000 * 60 * 60 *24 *30));
    let dias = Math.floor((diferencaDatas) / (1000 * 60 * 60 *24));
    let horas = Math.floor((diferencaDatas) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencaDatas) / (1000 * 60));
    let segundos = Math.floor((diferencaDatas) / (1000));

    contador.innerText = `NOSSO TEMPO: 
    
    ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas
    ${minutos} minutos e ${segundos} segundos`;
}

function sliderImg()
{
    contaImagem++;

    if (contaImagem > imagens.length -1) //Se "contaImagem" for maior que o tamanho das imagens juntas...
    {
        contaImagem = 0; //Volta para a imagem 0, ou seja, ele não vai mais ser 1, 2, 3, 4... Ele volta pro zero se estiver no fim da imagem (na ultima)
    }

    box.style.transform = `translateX(${-contaImagem * 100}%)`; //Aqui pegamos o nosso "box" e movemos o eixo X pegando a imagem (negativa ela pelo "-" que esta na frente) e multiplica pelo tamanho da imagem declarado lá em style.css
}

setInterval(sliderImg, 4000);
setInterval(calculaTempo, 1000);
calculaTempo();

//Davyd Roscowski