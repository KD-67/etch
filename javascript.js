const container = document.querySelector('#container');

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

let num = 16;

makeGrid();
