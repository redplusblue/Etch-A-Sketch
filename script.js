let mode = 'default';
let gridsize = 16;

function changeColor() {
    if(mode == 'default'){
        this.style.background = "black";
    }
}

function createGrid(gridsize) {
    document.getElementById('canvas').style.gridTemplateColumns = `repeat(${gridsize} ,20px)`;
    parentDiv = document.getElementById('canvas')
    while(parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild)
    }
    number = gridsize * gridsize
    for(let i=1; i <= number;i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("canvas_element");
        newDiv.addEventListener('mouseenter', changeColor)
        parentDiv.appendChild(newDiv)
    }
}

function changeSize() {
    newSize = document.getElementById('grid-size').value
    if (newSize > 100 || newSize <= 0 || newSize == null) {
        alert("Invalid Grid Size!")
    } else {
        gridsize = newSize
        createGrid(gridsize)
    }
}

function clearGrid() {
    createGrid(gridsize);
}

createGrid(gridsize)
