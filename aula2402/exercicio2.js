class Cidade {
  constructor(nome, estado, qtdeHabitantes) { 
    this.nome = nome;
    this.estado = estado;
    this.qtdeHabitantes = qtdeHabitantes;   
  }

  mostrarDados() {
    console.log("Nome:", this.nome);
    console.log("Estado:", this.estado);
    console.log("Habitantes:", this.qtdeHabitantes);
  }
} 

let cidade1 = new Cidade("Araçatuba", "SP", 200000);
let cidade2 = new Cidade("São Paulo", "SP", 12300000);

// última cidade inserida
cidade2.mostrarDados(); 

