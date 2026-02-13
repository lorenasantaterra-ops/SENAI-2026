function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)

    if (imc < 18.5) {
        console.log("Abaixo do peso")
    }
    else if (imc < 25) {
        console.log("Normal")
    }
    else if (imc < 30) {
        console.log("Sobrepeso")
    }
    else {
        console.log("Obesidade")
    }
}

calcularIMC(70, 1.70)