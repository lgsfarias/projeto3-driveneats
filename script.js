// declaração das variáveis
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
    // Esta função é invocada quando o usuário clica em uma opção de prato principal.
    // Ela tira a seleção dos outros pratos disponiveis e seleciona o prato escolhido.
    // Além de guardar nas variáveis prato e precoPrato o nome e o valor do prato, respectivamente, e os insere no PopUp de confirmação.
    prato = i.children[1].innerText
    precoPrato = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupPrato").innerHTML=prato+" <span>"+precoPrato+"</span>";
    verificacao()
}
function escolheBebida (i) {
    // Esta função é invocada quando o usuário clica em uma opção de bebida.
    // Ela tira a seleção das outras bebidas disponiveis e seleciona a bebida escolhida.
    // Além de guardar nas variáveis bebida e precoBebida o nome e o valor da bebida, respectivamente, e os insere no PopUp de confirmação.
    bebida = i.children[1].innerText
    precoBebida = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupBebida").innerHTML=bebida+" <span>"+precoBebida+"</span>";
    verificacao()
}
function escolheSobremesa (i) {
    // Esta função é invocada quando o usuário clica em uma opção de sobremesa.
    // Ela tira a seleção das outras sobremesas disponiveis e seleciona a sobremesa escolhida.
    // Além de guardar nas variáveis sobremesa e precoSobremesa o nome e o valor da sobremesa, respectivamente, e os insere no PopUp de confirmação.
    sobremesa = i.children[1].innerText;
    precoSobremesa = i.children[3].innerText.slice(3);
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    document.querySelector(".popupSobremesa").innerHTML=sobremesa+" <span>"+precoSobremesa+"</span>";
    verificacao()
}
function verificacao () {
    // Esta função é invocada toda vez que o usuário seleciona uma opção.
    // Ela verifica se as três opções ja foram escolhidas. 
    // Se sim, ela habilita o botão fechar pedido.
    if (prato!==undefined && bebida!== undefined && sobremesa!==undefined){
        document.getElementById("finaliza").style.backgroundColor="#32B72F";
        document.getElementById("finaliza").style.color="white";
        document.getElementById("finaliza").innerText="Fechar pedido";
    }
}
function finaliza () {
    // Esta função é invocada quando o usuário clica no botão "fechar pedido".
    // Apenas se as 3 opções ja estiverem sido escolhidas, ela pede, através do prompt, o nome e o endereço do usuário. 
    // Ela também calcula o total do pedido e insere no PopUp de confirmação.
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
    // Esta função é invocada quando o usuário clica no botão "Cancelar".
    // Ela fecha o PopUp de confirmação para que o usuário possa refazer o pedido.
    document.querySelector(".popup-wrapper").classList.add("escondido");
}
function tudoCerto () {
    // Esta função é invocada quando o usuário clica no botão "Tudo certo, pode pedir!".
    // Ela elabora uma mensagem com todas as informções do pedido em envia por whatsapp para a equipe do restaurante..
    let mensagem;
    mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`
    console.log(mensagem);
    window.open("https://wa.me/+5521980399582?text="+encodeURIComponent(mensagem));
}