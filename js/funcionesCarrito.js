import { obtenerCarrito, vaciarCarritoStorage, guardarCarrito, } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();

    carrito.push(producto);

    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje(`Producto '${producto.title}' agregado exitosamente`);
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado con éxito");
};

export const vaciarCarrito = () => {
    if(confirm("¿Estás seguro/a?")){
        vaciarCarritoStorage();
        actualizarContador([]);
        mostrarMensaje("Carrito vaciado con éxito");
        return;
    }
};