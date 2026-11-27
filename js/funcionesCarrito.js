
import { obtenerCarrito, vaciarCarritoStorage, guardarCarrito, } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();

    carrito.push(producto);

    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje(`Producto '${producto.title}' agregado exitosamente`, "Éxito", "exito");
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado con éxito", "Producto eliinado", "exito");
};

export const vaciarCarrito = async () => {
    const result = await Swal.fire({
    title: "¿Deseas vaciar el carrito?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    iconColor: "#3b234a",
    confirmButtonColor: "#3b234a",
    cancelButtonColor: "#716075",
    confirmButtonText: "¡Sí, vaciar!"
    });

    if (result.isConfirmed){
        vaciarCarritoStorage();
        actualizarContador([]);
        mostrarMensaje("Carrito vaciado con éxito", "Carrito vacio", "success");
        return true;
    }
        
    return false;
        
};