import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
    fetch("/data/products.json")
    .then(response =>{
    return response.json();})
    .then(productos => {
    console.log(productos);
    const contenedor = document.getElementById("card-container");
    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const image = document.createElement("img");
        image.src = `./${producto.image}`;
        image.alt = producto.title;

        const title = document.createElement("h3");
        title.textContent = producto.title;

        const price = document.createElement("p");
        price.textContent = `$${producto.price}`;

        const boton = document.createElement("button");
        boton.classList.add("btn", "bg-secondary", "text-dark");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {agregarAlCarrito(producto)});

        //Armar tarjeta
        tarjeta.appendChild(image);
        tarjeta.appendChild(title);
        tarjeta.appendChild(price);
        tarjeta.appendChild(boton);

        //Agregar al contenedor
        contenedor.appendChild(tarjeta);
    });
})
.catch(error => {
    console.error('Error: ', error);
    alert("Error al obtener los productos");
})
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    renderizarProductos();
    actualizarContador(carrito);
})

