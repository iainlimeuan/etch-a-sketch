const container = document.querySelector('.container');

let sizeOfGrid = 16;
let brushColor = 'black'

const createGrid = (amtOfGrids) => {
    for (i = 0; i < amtOfGrids; i++) {
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

