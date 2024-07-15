function cambiarColor() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
}
