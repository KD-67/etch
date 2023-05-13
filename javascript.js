const container = document.querySelector('#container');
const row_cube = document.getElementsByClassName("row");
const column_cube = document.getElementsByClassName("column");

function makeGrid() {
    for(let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for (let j = 0; j < num; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            row.append(column);
        }
    }
};

function draw() {
    const squares = document.querySelectorAll('.column');
    const draw_black = document.querySelector('#draw_black');
    const draw_white = document.querySelector('#draw_white');

   squares.forEach(function(column) {
    column.addEventListener('mouseover', () => {
        if (draw_black.checked) {
            column.style.backgroundColor = 'black';
        } else if (draw_white.checked) {
            column.style.backgroundColor = 'white';
        }
    });
   });
   }


let num = 16;

makeGrid();
draw();
