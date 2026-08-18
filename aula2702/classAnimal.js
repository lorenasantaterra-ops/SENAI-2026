class Animal {
    especie;
    #genero;
    #qtdeIndividuos;
    #nome;

    constructor(especie, genero, qtde, nome){
        this.especie = especie;
        this.#genero = genero;
        this.#qtdeIndividuos = qtde;
        this.#nome = nome;
    }
}

const panda = new Animal('urso','fêmea', 2, 'Peppa e Pig' )