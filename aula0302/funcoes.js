//primeiro tipo de fução padrão
function saudacao(nome, sobrenome){
    console.log('Olá, seja bem vindo' + nome +  sobrenome );
}

saudacao('Lorena' , 'Santaterra');//chamada da fução

//segundo tipo - função anonima
const somar = function (num1, num2) {
    console.log('A soma dos números é = ' + (num1+num2));
}
somar(25,35);

//terceiro tipo - arrow function
const subtrairComRetorno = (num1, num2) => {
    return num1-num2;
}
console.log('A subtração dos números é = ' + 
subtrairComRetorno (30,50));
