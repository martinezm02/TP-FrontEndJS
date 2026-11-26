import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("carrito-container");
    contenedor.classList.add("card-container");

    const divAcciones = document.getElementById("acciones-carrito");
    divAcciones.classList.add("acciones-carrito");

    //Lineas para limpiar contenedor antes de renderizar tarjetas y botones
    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    
    if(!carrito.length){
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vacío 😔";

        contenedor.appendChild(mensaje);

        return;
    }

    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const image = document.createElement("img");
        image.src = `../${producto.image}`;
        image.alt = producto.title;

        const title = document.createElement("h3");
        title.textContent = producto.title;

        const price = document.createElement("p");
        price.textContent = `$${producto.price}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "bg-secondary", "text-dark");
        btnEliminar.textContent = "Eliminar producto";

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito();
        });

        tarjeta.appendChild(image);
        tarjeta.appendChild(title);
        tarjeta.appendChild(price);
        tarjeta.appendChild(btnEliminar);

        contenedor.appendChild(tarjeta);
    });

    const btnVaciarCarrito = document.createElement("button");
    btnVaciarCarrito.classList.add("btn","bg-primary", "text-light");
    btnVaciarCarrito.textContent = "Vaciar carrito";
    btnVaciarCarrito.addEventListener("click", async () => {
        const confirmado = await vaciarCarrito();
        if(confirmado){
            renderizarCarrito();
        }
        
    });

    const btnFinalizarCompra = document.createElement("button");
    btnFinalizarCompra.classList.add("btn", "bg-primary", "text-light");
    btnFinalizarCompra.textContent = "Finalizar compra";
    btnFinalizarCompra.addEventListener("click", async () => {
        mostrarMensaje("Gracias por comprar", "Compra finalizada", "exito");
    })

    divAcciones.appendChild(btnVaciarCarrito);
    divAcciones.appendChild(btnFinalizarCompra);
};
document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    renderizarCarrito();
    actualizarContador(carrito);
});
