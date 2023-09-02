const listaDeProductos = [
    ["Camisetas de algodón de varios colores y diseños", "camisanegra.jpeg"],
    ["Pantalones vaqueros de diferentes estilos y tallas", "camisa1.jpeg"],
    ["Camisetas deportivas para hombres","camisa2.jpeg"],
    ["Pantalones de vestir para mujeres","camisa3.jpeg"],
    ["Camisetas de manga larga para niños","camisa5.jpeg"],
    ["Pantalones cortos de verano para mujeres","camisa9.jpeg"],
    ["Camisas elegantes para hombres","camisa6.jpeg"],
    ["Pantalones casuales para hombres","camisa7.jpeg"],
];

const listaDeAcces = [
    ["Cadena rayo", "rayo.jpeg"],
    ["Cadena ", "cadena.jpeg"],
    ["cadena de gatos", "amorgato2.jpeg"],
    ["anillos para parejas", "anillosparejas.jpeg"],
    ["aretes", "arete.jpeg"],
    ["anillos", "3_negroplata.jpeg"],
    ["anillo emociones", "emociones.jpeg"],
    ["Pulpsereas", "pulsera.jpeg"]
];

/*-- Productos --*/
const nombresProductos = listaDeProductos.map(producto => producto[0]);
const imagenesProductos = listaDeProductos.map(producto => producto[1]);

let divProductos = document.getElementById('ver-productos');
for (let i = 0; i < 8; i++) {
    const divCarta = document.createElement('div')
    divCarta.className = 'cards'
    divProductos.append(divCarta);
    const img = document.createElement('img');
    img.src = "../media/img/ropa/"+imagenesProductos[i]
    img.alt = "No existe"
    divCarta.append(img)
    const parrafo = document.createElement('p')
    divCarta.append(parrafo)
    parrafo.innerHTML = nombresProductos[i]
    const enlace = document.createElement('a')
    enlace.href = "VistaProducto.html"
    enlace.innerHTML = "Visitar Producto"
    divCarta.append(enlace)
}

/*-- Accesorios --*/
const nombresAccesorios = listaDeAcces.map(i => i[0]);
const imagenesAccesorios = listaDeAcces.map(i => i[1]);

let divAccesorios = document.getElementById('ver-accesorios');
for (let i = 0; i < 8; i++) {
    const divCarta = document.createElement('div')
    divCarta.className = 'cards'
    divAccesorios.append(divCarta);
    const img = document.createElement('img');
    img.src = "../media/img/"+imagenesAccesorios[i]
    img.alt = "No existe"
    divCarta.append(img)
    const parrafo = document.createElement('p')
    divCarta.append(parrafo)
    parrafo.innerHTML = nombresAccesorios[i]
    const enlace = document.createElement('a')
    enlace.href = "VistaProducto.html"
    enlace.innerHTML = "Visitar Producto"
    enlace.className = "btn"
    divCarta.append(enlace)
}

/*-- Slider --*/
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let counter = 0;
const slideWidth = images[0].clientWidth;

function nextSlide() {
    counter++;
    if (counter === images.length) {
        counter = 0;
    }
    updateSlider();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Cambia automáticamente las imágenes cada 3 segundos

