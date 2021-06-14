let color = "black"; 
let boxes = 16; 

const container = document.querySelector('.container'); 

for (let i = 0; i < boxes; i++) {
    for (let j = 0; j < boxes; j++) {
        const div = document.createElement('div'); 
        div.style.border = "1px solid black";
        container.appendChild(div); 
    }
}