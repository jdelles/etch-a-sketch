let size = 16; 

function createBoard(size) {
    const container = document.querySelector('.container'); 
    container.style.gridTemplateColumns = `repeat(${size}, auto)`; 
    const board = size * size; 
    for (let i = 0; i < board; i++) {
        const div = document.createElement('div'); 
        div.style.border = "1px solid black";
        div.style.backgroundColor = "white"; 
        div.addEventListener('mouseover', draw); 
        container.appendChild(div); 
    }
}

function draw(e) {
    if (e.target.style.backgroundColor === "white") {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    } // TODO: else { make darker 10% each pass till black }
  }

function drawAgain() {
    size = prompt("How large would you like your board?"); 
    size = parseInt(size); 
    if (size <= 100 || size > 1) {
        createBoard(size);
    } else {
        drawAgain(); 
    }
}

function clear() {
    const board = size * size; 
    const container = document.querySelector('.container'); 
    for(let i = 0; i < board; i++) {  
        const div = container.querySelector('div');   
        container.removeChild(div); 
    }
    drawAgain(); 
}

function initialize() {
    createBoard(size); 
    const reset = document.querySelector('#clear'); 
    reset.addEventListener('click', clear); 
}

initialize(); 