const listaDeProductos = [
    ["Camisetas de algodón de varios colores y diseños", "camisanegra.jpeg", "$5000.00"],
    ["Pantalones vaqueros de diferentes estilos y tallas", "camisa1.jpeg", "$2000.00"],
    ["Camisetas deportivas para hombres","camisa2.jpeg", "$1500.00"],
    ["Pantalones de vestir para mujeres","camisa3.jpeg", "$9000.00"],
    ["Camisetas de manga larga para niños","camisa5.jpeg", "$2000.00"],
    ["Pantalones cortos de verano para mujeres","camisa9.jpeg", "$1200.00"],
    ["Camisas elegantes para hombres","camisa6.jpeg", "$9000.00"],
    ["Pantalones casuales para hombres","camisa7.jpeg", "$1000.00"],
];
const listaDeAcces = [
    ["Cadena rayo", "rayo.jpeg", "$2000.00"],
    ["Cadena ", "cadena.jpeg", "$1000.00"],
    ["Cadena de gatos", "amorgato2.jpeg", "$500.00"],
    ["Anillos para parejas", "anillosparejas.jpeg", "$10000.00"],
    ["Aretes", "arete.jpeg", "$100.00"],
    ["Anillos", "3_negroplata.jpeg", "$50000.00"],
    ["Anillo emociones", "emociones.jpeg", "$5000.00"],
    ["Pulseras", "pulsera.jpeg", "$100.00"]
];

const divProductos = document.getElementById('ver-productos');
const divAccesorios = document.getElementById('ver-accesorios');

mostrarCartas(listaDeProductos, divProductos, "producto");
mostrarCartas(listaDeAcces, divAccesorios, "accesorios");

function mostrarCartas(array, divId, tipo) {
    const arrayNombres = array.map(e => e[0])
    const arrayImagenes = array.map(e => e[1])
    const arrayPrecios = array.map(e => e[2])

    for(let i = 0; i < 8; i++) {
        /* Se crea un div para contenedor de las cartas*/
        let divCarta = document.createElement('div');
        divCarta.className = 'cards';
        divId.append(divCarta);

        /* Se crea una etiqueta <img> y se referencia */
        let img = document.createElement('img');
        img.src = "../media/img/"+tipo+"/"+arrayImagenes[i];
        img.alt = "No existe";
        divCarta.append(img);

        /* Se crea una etiqueta <p> y se muestra el texto */
        let parrafo = document.createElement('p');
        divCarta.append(parrafo);
        parrafo.innerHTML = arrayNombres[i];

        /* Se crea una etiqueta <p> y se muestra el precio */
        let precio = document.createElement('p');
        divCarta.append(precio);
        precio.innerHTML = arrayPrecios[i];

        /* Se crea una etiqueta <a> y se crea un enlace a otra página */
        let enlace = document.createElement('a');
        enlace.href = "PRODUCTOS/"+tipo+[i+1]+".html";
        enlace.innerHTML = "Visitar Producto",
        enlace.className = "btn";
        divCarta.append(enlace);
    }
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

