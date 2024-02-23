let currentSize = 200; 
let currentColorIndex = 0; 
const colors = ['red', 'green', 'blue']; 
const maxSize = 420;
const minSize = 200;

function updateGlobo() {
    const globo = document.getElementById('globo');
    globo.style.width = `${currentSize}px`;
    globo.style.height = `${currentSize}px`;
    globo.style.backgroundColor = colors[currentColorIndex];
}

function boom() {
    currentSize += 10;
    if (currentSize > maxSize) {
        currentSize = minSize;
        currentColorIndex = 0;
    } else {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
    updateGlobo();
}

function desinflar() {
    if (currentSize > minSize) {
        currentSize -= 5;
        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    } else {
        currentColorIndex = 0; 
    }
    updateGlobo();
}

document.getElementById('globo').addEventListener('click', boom);
document.getElementById('globo').addEventListener('mouseleave', desinflar);

let currentSize = 200;
let currentColorIndex = 0;
const colors = ['red', 'green', 'blue'];
const maxSize = 420;
const minSize = 200;

function updateGlobo() {
    $('#globo').css({
        'width': `${currentSize}px`,
        'height': `${currentSize}px`,
        'background-color': colors[currentColorIndex]
    });
}

function boom() {
    currentSize += 10;
    if (currentSize > maxSize) {
        currentSize = minSize;
        currentColorIndex = 0;
    } else {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
    updateGlobo();
}

function desinflar() {
    if (currentSize > minSize) {
        currentSize -= 5;
        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    } else {
        currentColorIndex = 0;
    }
    updateGlobo();
}

$('#globo').on('click', boom);
$('#globo').on('mouseleave', desinflar);
