const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-button');

let sizeOfGrid = 16;
let brushColor = 'black';

const createGrid = (amtOfGrids) => {
    if (amtOfGrids === 0) {
        while (container.firstChild !== null) {
            container.firstChild.remove();
        }
    } 
    else for (i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 700 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = brushColor;
            })

            row.appendChild(gridBox);
        }
        container.appendChild(row)
    }
}

createGrid(sizeOfGrid);

resetButton.addEventListener("click", () => {
    createGrid(0);
    let userSize = prompt('What dimensions do you want for the new grid?');
    if (userSize > 100) {
        alert("Cannot be more than 100!")
    }
    sizeOfGrid = userSize;
    createGrid(userSize);
})



