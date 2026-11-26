//FUNCIONES RESPONSIVE

//Actualizar contador de carrito
export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if(!contador) return;
    if(carrito.length > 0){
        contador.textContent = carrito.length || " ";
        //atributo cantidad si quiero agregar más de un producto, usar reduce
    }else{
        contador.textContent = "";
    }
};
//Alertas de mensajes
export const mostrarMensaje = (texto, titulo, tipo) => {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: tipo,
        background: "#3b234a",
        color: "#ffffff",
        iconColor: "#ffffff",
        confirmButtonColor: "#716075"
    })
};
