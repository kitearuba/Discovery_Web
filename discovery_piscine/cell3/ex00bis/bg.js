function cambiarColor() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    $('body').css('background', 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')');
}