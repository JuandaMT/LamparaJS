
svgObjects = document.getElementsByTagName("svg");
bombilla = document.getElementsByTagName("ellipse")[0];

interruptorApagado = svgObjects[1];
interruptorEncendido = svgObjects[2];

interruptorEncendido.style.display = 'none';


interruptorApagado.addEventListener("click", function () {
    bombilla.style.filter = "drop-shadow( 0px 0px 100px  yellow)";
    bombilla.style.fillOpacity = "0.9";
    interruptorApagado.style.display = 'none';
    interruptorEncendido.style.display = 'flex';
});


interruptorEncendido.addEventListener("click", function () {
    bombilla.style.filter = "drop-shadow( 0px 0px 0px )";
    bombilla.style.fillOpacity = "0.38";
    interruptorApagado.style.display = 'flex';
    interruptorEncendido.style.display = 'none';
});
