class Producto {
    constructor(id, nombre, imagen, precio, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.tipo = tipo;
    }
}

const listProductos = [
    new Producto(
        1,
        'Camisetas con diseños Coleccion #1',
        'ROPA-Col1Camisa01.jpeg',
        '$15000.00',
        'Ropa'
    ),
    new Producto(
        2,
        'Camisetas con diseños Coleccion #2',
        'ROPA-Col2Camisa01.jpeg',
        '$90000.00',
        'Ropa'
        
    ),
    new Producto(
        3,
        'Conjuntos Colección #1',
        'ROPA-Col1Conjunto01.jpeg',
        '$20000.00',
        'Ropa'
        
    ),
    new Producto(
        4,
        'Conjuntos Colección #2',
        'ROPA-Col2Conjunto01.jpeg',
        '$12000.00',
        'Ropa'
        
    ),
    new Producto(
        5,
        'Pantalones Jogger',
        'ROPA-Pantalon01.jpeg',
        '$90000.00',
        'Ropa'
    ),
    new Producto(
        6,
        'Camisetas Oversize',
        'ROPA-CamisaOverSize01.jpeg',
        '$25000',
        'Ropa'
    ),
    new Producto(
        7,
        'Camisetas con diseños Japoneses',
        'ROPA-CamisaJaponesa01.jpeg',
        '$20000.00',
        'Ropa'
    ),
    new Producto(
        8,
        'Kimonos Japoneses',
        'ROPA-KimonoNegro01.jpeg',
        '$50000.00',
        'Ropa'
    ),
    new Producto(
        9,
        'Cadenas de Rayo',
        'ACC-CadenaRayo01.jpeg',
        '$10000.00',
        'Accesorio'
    ),
    new Producto(
        10, 
        'Cadenas de gatos', 
        'ACC-CadenaGato01.jpeg', 
        '$5000.00', 
        'Accesorio'
    ),
    new Producto(
        11,
        'Anillos para parejas',
        'ACC-AnilloParejas01.jpeg',
        '$90000.00',
        'Accesorio'
    ),
    new Producto(
        12, 
        'Aretes',
        'ACC-Arete01.jpeg',
        '$10000.00',
        'Accesorio'
    ),
    new Producto(13, 
        'Anillos',
        'ACC-Anillos01.jpeg',
        '$50000.00',
        'Accesorio'
    ),
    new Producto(
        14,
        'Anillos Emociones',
        'ACC-AnilloEmociones01.jpeg',
        '$5000.00',
        'Accesorio'
    ),
    new Producto(
        15,
        'Anillos Negro Plata',
        'ACC-AnilloNegroPlata01.jpeg',
        '$10000.00',
        'Accesorio'
    ),
    new Producto(
        15,
        'Pulseras',
        'ACC-Pulsera01.jpeg',
        '$100.00',
        'Accesorio'
    ),
];

// Válidar index.html
const divProductos = document.getElementById('ver-productos');
const divAccesorios = document.getElementById('ver-accesorios');
if (divProductos) {
    mostrarCartas(listProductos, divProductos, divAccesorios);
    mostrarSlider();
}

// Válidar producto.html
const nombreProducto = document.querySelector('#nombreProducto');
const precioProducto = document.querySelector('#precioProducto');
const divImagenProducto = document.querySelector('#imagenProducto');
if (nombreProducto && precioProducto && divImagenProducto) {
    mostrarProducto();
}

//-- Funciones --
function mostrarCartas(array, divPrenda, divAccesorio) {
    const nombres = array.map(e => e.nombre);
    const imagenes = array.map(e => e.imagen);
    const precios = array.map(e => e.precio);
    const ids = array.map(e => e.id);
    const tipos = array.map(e => e.tipo);

    for(let i = 0; i < 16; i++) {
        // Se crea un div para contenedor de las cartas
        let divCarta = document.createElement('div');
        divCarta.className = 'cards';
        tipos[i] == 'Ropa' ? divPrenda.append(divCarta) : divAccesorio.append(divCarta)

        // Se crea una etiqueta <img> y se referencia
        let img = document.createElement('img');
        img.src = `src/img/productosImg/${imagenes[i]}`;
        img.alt = 'No existe';
        divCarta.append(img);

        // Se crea una etiqueta <p> y se muestra el texto
        let parrafo = document.createElement('p');
        divCarta.append(parrafo);
        parrafo.innerHTML = nombres[i];

        // Se crea una etiqueta <p> y se muestra el precio
        let precio = document.createElement('p');
        divCarta.append(precio);
        precio.innerHTML = precios[i];

        // Se crea una etiqueta <a> y se crea un enlace a otra página
        let enlace = document.createElement('a');
        enlace.href = `producto.html?id=${ids[i]}`
        enlace.innerHTML = 'Visitar Producto',
        enlace.className = 'btn';
        divCarta.append(enlace);
    }
}

function mostrarSlider() {
    // Slider
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    
    let index = 1;
    
    function slide() {
        let percentage = index * -100;
        slider.style.transform = `translateX(${percentage}%)`;
        index++;
        if (index == images.length) {
            index = 0;
        }
    }

    setInterval(slide, 3000)
}

function mostrarProducto() {
    let queryStrings = new URLSearchParams(window.location.search);
    let productoGet = Object.fromEntries(queryStrings);

    const producto = listProductos.find(e => e.id == productoGet.id);

    nombreProducto.innerHTML = producto.nombre;
    precioProducto.innerHTML = producto.precio;
    
    const imagenProducto = document.createElement('img');
    imagenProducto.src = `src/img/productosImg/${producto.imagen}`;
    imagenProducto.alt = 'Imagen Producto';
    divImagenProducto.append(imagenProducto);
}