import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

//Para mostrar el contador de carrito luego de que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
});
