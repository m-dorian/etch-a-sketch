let gridSize = Number(prompt('Grid size:'));
gridSize *= gridSize;
let squareSize = Math.sqrt((500**2)/(gridSize));
const drawingArea = document.querySelector('.drawing-area'); 

    for(let i = 0; i < gridSize; i++){ 
        square = document.createElement('div');
        square.classList.add('grid');  
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        drawingArea.appendChild(square); 
        square = 'undefined';
} 

const gridSquares = document.querySelectorAll('.grid'); 

gridSquares.forEach(grid => {  
    grid.addEventListener('mouseover', () => { 
        grid.style.backgroundColor ='green';
    })
    
})

