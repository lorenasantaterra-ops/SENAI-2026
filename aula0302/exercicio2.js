const somar = (num1, num2) => {
    console.log('A soma é = ' + (num1 + num2))
}

const subtrair = (num1, num2) => {
    console.log('A subtração é = ' + (num1 - num2))
}

const multiplicar = (num1, num2) => {
    console.log('A multiplicação é = ' + (num1 * num2))
}

const dividir = (num1, num2) => {
    console.log('A divisão é = ' + (num1 / num2))
}


function calcular(num1, num2, operador) {

    const operacoes = {
        '+': somar,
        '-': subtrair,
        '*': multiplicar,
        '/': dividir
    }

    operacoes[operador](num1, num2)
}


calcular(10, 5, '+')
calcular(10, 5, '-')
calcular(10, 5, '*')
calcular(10, 5, '/')


