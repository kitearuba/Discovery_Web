let currentSize = 200; // Initial size of the globo
let currentColorIndex = 0; // Start with red (0: red, 1: green, 2: blue)
const colors = ['red', 'green', 'blue']; // Color order
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
        currentColorIndex = 0; // Reset to red
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
        // If the circle is exactly 200px, ensure it stays red
        currentColorIndex = 0; // Keep red
    }
    updateGlobo();
}

document.getElementById('globo').addEventListener('click', boom);
document.getElementById('globo').addEventListener('mouseleave', desinflar);
