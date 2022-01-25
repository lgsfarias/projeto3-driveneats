var prato
var bebida
var sobremesa

function escolhePrato (i) {
    prato = i.children[1].innerText
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    finaliza()

    // document.getElementById("frango").style.borderColor="transparent";
    // document.getElementById("carne").style.borderColor="transparent";
    // document.getElementById("misto").style.borderColor="transparent";

    // document.getElementById("frango").children[4].style.display="none";
    // document.getElementById("carne").children[4].style.display="none";
    // document.getElementById("misto").children[4].style.display="none";
    
}
function escolheBebida (i) {
    bebida = i.children[1].innerText
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    finaliza()
}
function escolheSobremesa (i) {
    sobremesa = i.children[1].innerText
    for (opcao of i.parentElement.children){
        opcao.style.borderColor="transparent";
        opcao.children[4].style.display="none";
    }
    i.children[4].style.display="block";
    i.style.borderColor="#32B72F";
    finaliza()
}
function finaliza () {
    if (prato!==undefined && bebida!== undefined && sobremesa!==undefined){
        document.getElementById("finaliza").style.backgroundColor="#32B72F";
        document.getElementById("finaliza").style.color="white";
        document.getElementById("finaliza").innerText="Fechar pedido";
    }
    // console.log(prato +","+ bebida+","+ sobremesa);
}