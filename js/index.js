import { agregarAlCarrito } from "./funcionesCarrito";
import { productos } from "./provisorio.js";
import { obtenerCarrito } from "./storage";
import { actualizarContador } from "./ui";

const renderizarProductos = () => {
    const contenedor = document.getElementById("card.container");
    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn", "bg-secondary", "text-dark");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {agregarAlCarrito(producto)});

        //Armar tarjeta
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        //Agregar al contenedor
        contenedor.appendChild(tarjeta);
    });
};

document.addEventListener("DOM/ContentLoaded", () => {
    const carrito = obtenerCarrito();
    renderizarProductos();
    actualizarContador(carrito);
})