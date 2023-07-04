
let image = document.querySelector('#iimage')
let buttons = document.querySelector('#ibuttons')
let poscor = 0

let apertarbotao = (event) =>{
    buttonscolor[event.target.id]();
}

let trocacor = ()=>{
    if(poscor < 2){
    poscor++}
    else {
        poscor = 0
    }
}


let mudarcor = () =>{
    let cores = ['ivermelho','iamarelo','iverde'];
    let cor = cores[poscor];
    buttonscolor[cor]();
    trocacor()
}

let buttonscolor = {
    'ivermelho': () => image.src= 'imagens/vermelho.png',
    'iamarelo': () => image.src= 'imagens/amarelo.png',
    'iverde': () => image.src='imagens/verde.png',
    'iautomatico': () => setInterval(mudarcor, 1000)
}


buttons.addEventListener('click', apertarbotao)



