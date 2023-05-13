const container = document.querySelector('#container');

function makeGrid() {
    for(let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for (let j = 0; j < 16; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            row.append(column);
        }
    }
};

makeGrid();
