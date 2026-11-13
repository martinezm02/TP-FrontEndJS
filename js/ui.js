//FUNCIONES RESPONSIVE

//Actualizar contador de carrito
export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if(contador){
        contador.textContent = carrito.length || "";
        //atributo cantidad si quiero agregar más de un producto, usar reduce
    }
};
//Alertas de mensajes
export const mostrarMensaje = (texto) => {
    alert(texto);
};