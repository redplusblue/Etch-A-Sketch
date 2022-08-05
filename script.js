let mode = 'default';
let gridsize = 16;
let memoryMode = 'default';

function changeColor() {
    if(mode == 'default'){
        this.style.background = "black";
    } else if(mode == 'random') {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        console.log(r,g,b);
        this.style.background = `rgb(${r}, ${g}, ${b})`;
    } else if(mode == 'none') {
        return
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
        newDiv.addEventListener('contextmenu', drawMode)
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

function randomMode(){
    mode = 'random';
}

function defaultMode() {
    mode = 'default';
}

function drawMode() {
    if(mode == 'none') {
        mode = memoryMode;
    }
    else {
        memoryMode = mode;
        mode = 'none';
    }
}

createGrid(gridsize)

/*document.addEventListener('contextmenu' ,() => {
    
})
*/
