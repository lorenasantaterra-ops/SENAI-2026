const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const paragrafo = document.querySelector('#texto')
const container = document.querySelector('#container')
const divImagem = document.querySelector('#imagem')

corpo.style.backgroundColor = '#d656e9'
corpo.style.color = 'white'
corpo.style.fontFamily = 'Arial'


titulo.textContent = 'Manipulação do DOM com JavaScript'


container.style.width = '94%'
container.style.margin = '20px auto'
container.style.padding = '20px'
container.style.backgroundColor = '#ffffff33'
container.style.borderRadius = '10px'
container.style.textAlign = 'center'


container.innerHTML = '<h2 id="uc"></h2>'


const uc = document.querySelector('#uc')
uc.innerText = 'UC: Programação de Aplicativos Web'


divImagem.style.textAlign = 'center'
divImagem.style.marginTop = '20px'

divImagem.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
         alt="Logo JavaScript"
         width="200">
`

