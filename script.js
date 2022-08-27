let gridSize; 
let squareSize;
const gridSizeInput = document.querySelector('#grid-size'); 
const drawingArea = document.querySelector('.drawing-area'); 


gridSizeInput.addEventListener('change', function(e) { 
    while (drawingArea.hasChildNodes()) {
        drawingArea.removeChild(drawingArea.firstChild);
      } ;
    ;
    gridSize = e.target.valueAsNumber; 
 squareSize = Math.sqrt((500**2)/(gridSize**2));


    for(let i = 0; i < gridSize**2; i++){ 
        let square = document.createElement('div');
        square.classList.add('grid');  
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`; 
        drawingArea.appendChild(square); 
        square = '';
} 
changeSquareColor();
})




const colorPicker = document.querySelector('#color-select');
let colorValue;
colorPicker.addEventListener('change', function(e) { 
    colorValue = e.target.value; 
    return colorValue;
    
}) 
  
function changeSquareColor(){
const gridSquares = document.querySelectorAll('.grid'); 
gridSquares.forEach(grid => {  
    grid.addEventListener('mouseover', () => { 
        grid.style.backgroundColor = `${colorValue}`;
    })
    
})
}