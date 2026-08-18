class Livro {
  constructor(titulo, autor, ano, paginas, genero, preco, editora, isbn) {
    this.titulo = titulo;
    this.autor = autor; 
    this.ano = ano;
    this.paginas = paginas;
    this.genero = genero;
    this.preco = preco;
    this.editora = editora;
    this.isbn = isbn;
  }
} 

// criando um livro
let livro1 = new Livro(
  "Dom Casmurro",
  "Machado de Assis",
  1899,
  256,
  "Romance",
  39.90,
  "Globo",
  "123456789"
);

// mostrando no console
console.log("Título:", livro1.titulo);
console.log("Autor:", livro1.autor); 
console.log("Ano:", livro1.ano);
console.log("Preço:", livro1.preco); 
