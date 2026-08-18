class Bicicleta {
  #modelo;
  #marca;
  #cor;
  #velocidadeMaxima;

  constructor(modelo, marca, cor, velocidadeMaxima) {
    this.#modelo = modelo;
    this.#marca = marca;
    this.#cor = cor; 
    this.setVelocidadeMaxima(velocidadeMaxima);
  }

  // GETTERS
  getModelo() {
    return this.#modelo;
  }

  getMarca() {
    return this.#marca;
  }

  getCor() {
    return this.#cor;
  }

  getVelocidadeMaxima() {
    return this.#velocidadeMaxima;
  }

  // SETTERS
  setModelo(modelo) {
    this.#modelo = modelo;
  }

  setMarca(marca) {
    this.#marca = marca;
  }

  setCor(cor) {
    this.#cor = cor;
  }

  setVelocidadeMaxima(velocidade) {
    if (velocidade <= 35) {
      this.#velocidadeMaxima = velocidade;
    } else {
      console.log("❌ Velocidade não pode ser maior que 35 km/h");
    }
  }
} 

let bike1 = new Bicicleta("Mountain Bike", "Caloi", "Preta", 30);

console.log("Modelo:", bike1.getModelo()); 
console.log("Velocidade:", bike1.getVelocidadeMaxima());

bike1.setVelocidadeMaxima(40); // vai dar erro
bike1.setVelocidadeMaxima(35); // permitido

console.log("Nova velocidade:", bike1.getVelocidadeMaxima()); 