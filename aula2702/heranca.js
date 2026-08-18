class Jogador {//classe mãe
    #nome;
    #numero;

    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome(){
        return this.#nome
    }
    getNumero(){
        return this.#numero
    }
}//classe mãe geralmente não instanciada