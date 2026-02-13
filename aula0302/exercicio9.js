function aplicarDesconto(preco, cupom) {

    if (cupom === "BRONZE") {
        console.log(preco * 0.95)
    }
    else if (cupom === "PRATA") {
        console.log(preco * 0.90)
    }
    else if (cupom === "OURO") {
        console.log(preco * 0.85)
    }
    else {
        console.log(preco)
    }
}

aplicarDesconto(100, "PRATA")