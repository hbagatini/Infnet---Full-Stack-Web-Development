const codPromocional = {
    "RS":{
        "desconto": "10%",
        "condigoPromo": "descontoRS"
    },
    "SC":{
        "desconto": "15%",
        "condigoPromo": "descontoSC"
    },
    "PR":{
        "desconto": "5%",
        "condigoPromo": "descontoPR"
    },
    "SP":{
        "desconto": "20%",
        "condigoPromo": "descontoSP"
    }
}

class numChosenValid{
    constructor(inputValue){
        this.inputValue = inputValue
    }
    validating(){
        if (this.inputValue >= 1 && this.inputValue <= 10) {
            return true
        } else{
            return false
        }
    }
}

const spinnerLoad = () => {
    setTimeout(() => {
        document.querySelector(".game-number").classList.remove("d-none");
        document.querySelector(".game-number-spinner").classList.add("d-none");
    }, 1000)
}



//numero n permitido - alert-numero-nao-permitido
//alert-errou-numero - errou numero
//alert-acertou
const simulateValue = () => {
    let gerarNumero= Math.floor(Math.random() * 10) + 1;
    const inputChoosenValue = document.querySelector(".input-number").value
    const inputChoosenState = document.querySelector(".select-state").value
    let validarNum = new numChosenValid(inputChoosenValue);
    console.log(gerarNumero)


    document.querySelector(".alert-estado-obrigatório").style.display = "none";
    document.querySelector(".alert-numero-nao-permitido").style.display = "none";
    document.querySelector(".alert-errou-numero").style.display = "none";
    document.querySelector(".alert-acertou").style.display = "none";

    if (inputChoosenState === "Escolha uma opçao..." ) {
        const divAlert = document.querySelector(".alert-estado-obrigatório")
        const alertText = ('<p>' + `Favor selecione seu estado` + '</p>')
        divAlert.innerHTML = alertText
        divAlert.style.display = "block";

        divAlert.style.display = "block";
    } else if (validarNum.validating() == false) {
        const divAlert = document.querySelector(".alert-numero-nao-permitido")
        const alertText = ('<p>' + `Você só pode inserir um número de 1 a 10. Favor tentar novamente.` + '</p>')
        divAlert.innerHTML = alertText
        divAlert.style.display = "block";
    } else if (inputChoosenValue != gerarNumero) {
        console.log("numero escolhido" + inputChoosenValue)
        console.log("numero gerado" + gerarNumero)
        const divAlert = document.querySelector(".alert-errou-numero")
        const alertText = ('<p>' + `Vocè errou! O número era ${gerarNumero}. Tente novamente :)` + '</p>')
        divAlert.innerHTML = alertText
        divAlert.style.display = "block";
    } else if (inputChoosenValue == gerarNumero) {
        const divAlert = document.querySelector(".alert-acertou")
        const alertText = ('<p>' + `Você acerto e ganhou ${codPromocional[inputChoosenState].desconto} de desconto. Utilize o código "${codPromocional[inputChoosenState].condigoPromo}".` + '</p>')            
        divAlert.innerHTML = alertText
        divAlert.style.display = "block";
    }
    //limpa apos clicar em tentar
    const inputChoosen = document.querySelector(".input-number")
    inputChoosen.value = "";
}