import { obtenerCarrito } from "./storage.js"
import { actualizarContador } from "./ui.js";

export const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("carrito-container");
    
    const divAcciones = document.getElementById("acciones-carrito");
    
    //Lineas para limpiar contenedor antes de renderizar tarjetas y botones
    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    

};
