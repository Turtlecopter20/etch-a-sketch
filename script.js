const drawingBoard = document.querySelector('#drawingboard');
const numberOfSquares = document.querySelector('#slider');
const togglingModes = document.querySelectorAll("[name='togglingmodes']");
let n = 16;

function createSquares(n) {for (let i = 1; i <= n; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'firstsquarerow');
    drawingBoard.appendChild(div);
    for(let j = 1; j <= n; j++){
            const nextDivs = document.createElement('div');
            nextDivs.setAttribute('class', 'nextsquarerows');
            div.appendChild(nextDivs);
            addColoringEvent(drawingBoard, nextDivs);
        }
    }
}

function addColoringEvent (parent, child) {
    parent.addEventListener('mousedown', () => {
        child.addEventListener('mouseover', coloring
        );
    });
    window.addEventListener('mouseup', () => {
        child.removeEventListener('mouseover', coloring)
    });
}

let coloring = function color(e) {
    if (togglingModes[0].checked){
        e.target.style.backgroundColor = 'rgba(61, 91, 226, 1)';
    }
    else if (togglingModes[1].checked){
        gradingColoring(e.target, +0.1);
    };
    
}
    
function gradingColoring(wantedColorElement, increment) {
    const value = getComputedStyle(wantedColorElement).getPropertyValue('background-color');
    const parts = value.match(/[\d.]+/g);
    parts[3] = parseFloat(parts[3]) + increment;
    wantedColorElement.style.backgroundColor = `rgba(${ parts.join(',') })`
}

createSquares(n);
numberOfSquares.addEventListener('input', () => {
    drawingBoard.textContent = '';   
    n = numberOfSquares.value;
    createSquares(n);
})


