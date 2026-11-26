
const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    //Convierte a JSON antes de guardar el valor en local
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
    //Convertir lo que venga del storage o array vacio
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
    //Eliminar los items de localstorage
    localStorage.removeItem(KEY);
};