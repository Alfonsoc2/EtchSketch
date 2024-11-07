const container = document.getElementById('grid-container');

document.createElement('div')
const totalSquares = 16 * 16;
for (let i = 0; i < totalSquares; i++) {
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
}
