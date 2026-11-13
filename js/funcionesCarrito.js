import { obtenerCarrito, vaciarCarritoStorage } from "./storage.js"
import { guardarCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();

    carrito.push(producto);

    localStorage.guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje(`Producto ${producto.nombre} agregado exitosamente`);
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado con éxito");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado con éxito");
};