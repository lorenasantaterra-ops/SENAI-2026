class Pessoas{
    //encapsulamento
    nome;//atributo publico
    #cpf;//atributo privado
    #salario;//atributo privado

    //métodos getters e setters
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf
    }
    setSalario(valor){
        this.#salario = valor;
    }
    getSalario(){
        return this.#salario;
    }

}
const silva = new Pessoa();
silva.nome = 'Pedro';
silva.setCpf(14132020999);
console.log(silva.getCpf());
console.log(silva.getSalario());
console.log (silva);
