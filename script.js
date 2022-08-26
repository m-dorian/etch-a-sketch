let gridSize = Number(prompt('How many squares?'));
let squareSize = Math.sqrt(250000/gridSize); 
let square;
const drawingArea = document.querySelector('.drawing-area'); 

for(let i = 0; i < gridSize; i++){ 
    square = document.createElement('div');
    square.classList.add('grid'); 
    square.style.width = `${squareSize}px`;
    drawingArea.appendChild(square); 
    square = 'undefined';
} 
