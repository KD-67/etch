const container = document.querySelector('#container');
const row_cube = document.getElementsByClassName("row");
const column_cube = document.getElementsByClassName("column");
const user_num = document.querySelector('#user_num');

//funcitons:

function makeGrid() {

    container.innerHTML = ''; //clears any previous grid configuration

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
        } else if (draw_red.checked){
            column.style.backgroundColor = 'red';
        } else if (draw_blue.checked) {
            column.style.backgroundColor = 'blue';
        } else if (draw_yellow.checked) {
            column.style.backgroundColor = 'yellow';
        } else if (draw_white.checked) {
            column.style.backgroundColor = 'rgb(238, 235, 235)';
        }
    });
   });
   };

   //Getting the user-submitted grid size (if requested)

  let num = 16;

  document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const submitted_num = parseInt(user_num.value);
        if (!isNaN(submitted_num) && submitted_num >= 2 && submitted_num <= 99) {
            num = submitted_num;
        };
        makeGrid();
        draw();
     
  });

   makeGrid();
   draw();
