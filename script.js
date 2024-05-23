let container = document.querySelector(".container");

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


let isDrawing = false;

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

function draw(event){
    if (isDrawing === true) {
        event.target.style.backgroundColor = "black";
    }
}

makeGrid(16, 16);