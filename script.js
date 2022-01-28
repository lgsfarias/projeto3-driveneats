let prato
let bebida
let sobremesa

let precoPrato
let precoBebida
let precoSobremesa
let total

let nome
let endereco

function escolhePrato (i) {
    prato = i.children[1].innerText
    precoPrato = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupPrato").innerHTML=prato+" <span>"+precoPrato+"</span>";
    selecao()

    // document.getElementById("frango").style.borderColor="transparent";
    // document.getElementById("carne").style.borderColor="transparent";
    // document.getElementById("misto").style.borderColor="transparent";

    // document.getElementById("frango").children[4].style.display="none";
    // document.getElementById("carne").children[4].style.display="none";
    // document.getElementById("misto").children[4].style.display="none";
    
}
function escolheBebida (i) {
    bebida = i.children[1].innerText
    precoBebida = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupBebida").innerHTML=bebida+" <span>"+precoBebida+"</span>";
    selecao()
}
function escolheSobremesa (i) {
    sobremesa = i.children[1].innerText;
    precoSobremesa = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupSobremesa").innerHTML=sobremesa+" <span>"+precoSobremesa+"</span>";
    selecao()
}
function selecao () {
    if (prato!==undefined && bebida!== undefined && sobremesa!==undefined){
        document.getElementById("finaliza").style.backgroundColor="#32B72F";
        document.getElementById("finaliza").style.color="white";
        document.getElementById("finaliza").innerText="Fechar pedido";
    }
    // console.log(prato +"     "+ precoPrato + "\n"+ bebida+"     "+precoBebida+ "\n"+ sobremesa+"     "+precoSobremesa);
}
function finaliza () {
    if (prato!==undefined && bebida!== undefined && sobremesa!==undefined){
        if (nome===undefined){
            nome = prompt("Informe seu nome completo, por favor!")
        }
        if (endereco===undefined){
            endereco = prompt("Informe seu endereço, por favor!")
        }
        total=(parseFloat(precoPrato.replace(",","."))+parseFloat(precoBebida.replace(",","."))+parseFloat(precoSobremesa.replace(",","."))).toFixed(2).replace(".",",")
        document.querySelector(".popupTotal").innerHTML="TOTAL <span>R$ "+total +"</span>";
        document.querySelector(".popup-wrapper").classList.remove("escondido");
    }
}
function cancelar () {
    document.querySelector(".popup-wrapper").classList.add("escondido");
}
function tudoCerto () {
    let mensagem;
    mensagem = `Olá, gostaria de fazer o pedido:\n
- Prato: ${prato}\n
- Bebida: ${bebida}\n
- Sobremesa: ${sobremesa}\n
Total: R$ ${total}\n
\n
Nome: ${nome}\n
Endereço: ${endereco}`
    console.log(mensagem);
    window.open("https://wa.me/+5521979429298?text="+encodeURIComponent(mensagem));
}