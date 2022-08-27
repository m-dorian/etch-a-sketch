let gridSize = Number(prompt('Grid size:'));
const gridRange = document.querySelector('#range-button'); 
gridRange.addEventListener('click', function(e){ 
   window.location.reload();

}) 

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

const colorPicker = document.querySelector('#color-select');
let colorValue;
colorPicker.addEventListener('change', function(e) { 
    colorValue = e.target.value; 
    
})

const gridSquares = document.querySelectorAll('.grid'); 

gridSquares.forEach(grid => {  
    grid.addEventListener('mouseover', () => { 
        grid.style.backgroundColor = `${colorValue}`;
    })
    
})
