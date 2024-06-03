let container = document.querySelector(".container");
const NUMBER = 32;

// Creating grid container using flexbox as a task requirement
function makeGrid(rows, columns) {
    let totalNumberDivs = rows * columns;
    let divWidth = 100 / columns;
    let divHeight = 100 / rows;
    for(let numberDivs = 0; numberDivs < totalNumberDivs; numberDivs++) {
        let cell = document.createElement("div");
        cell.style.flexBasis = `${divWidth}%`;
        cell.style.height = `${divHeight}%`;
        container.appendChild(cell).className = "item";
    }
}

// Default grid for drawing
makeGrid(NUMBER, NUMBER);


// Making new grid with user parameters of colums and rows
let createGridButton = document.querySelector("#submitButton");
createGridButton.addEventListener('click', generateNewGrid);

function generateNewGrid() {
    let columnsInput = document.querySelector("#numberOfColumns");
    let rowsInput = document.querySelector("#numberOfRows");
    let columns = parseInt(columnsInput.value);
    let rows = parseInt(rowsInput.value);

    if (isNaN(columns) || isNaN(rows) || columns > 100 || rows > 100 || columns < 1 || rows < 1) {
        alert("PLease enter valid input for number of rows and columns");
        columnsInput.value = "";
        rowsInput.value = "";
        rows = NUMBER;
        columns = NUMBER;
    }

    container.replaceChildren();
    makeGrid(rows, columns);
}

// Enable the color picker
let newColor = "black";
let colorPalette = document.querySelector("#colorPicker");
colorPalette.addEventListener('change', function(event) {
    newColor = event.target.value;
})

// Adding functionality for drawing in the grid
let isDrawing = false;

function draw(event){
    if (isDrawing === true) {
        event.target.style.backgroundColor = newColor;
    }
}

container.addEventListener('mousedown', function startDraw(event) {
    isDrawing = true;
    draw(event);
});
container.addEventListener('mousemove', draw);
container.addEventListener('mouseup', function stopDraw() {
    isDrawing = false;
});
container.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "white";
})


// Clearing the grid to start new sketch
let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', clearTheGrid);

function clearTheGrid() {
    let allCells = document.querySelectorAll(".item");
    allCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
}

