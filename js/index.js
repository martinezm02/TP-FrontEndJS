import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

const renderizarProductos = (categoria) => {
    fetch("../data/products.json")
    .then(response =>{
    return response.json();})
    .then(productos => {
/* -------------------------------------------------------------------------- */
/*     FILTRADO POR CATEGORÍA, SE CARGA ANTES QUE LOS PRODUCTOS               */
/* -------------------------------------------------------------------------- */
    const contenedorFiltro = document.getElementById("filtro-categoria");
    if(contenedorFiltro.innerHTML === ""){
        mostrarFiltro(productos);
    }
/* -------------------------------------------------------------------------- */
/*     RENDERIZADO DE TARJETAS                                                */
/* -------------------------------------------------------------------------- */
    const contenedor = document.getElementById("card-container");
    contenedor.innerHTML = "";

    productos.forEach((producto) => {
        if(categoria == producto.category.value || categoria == "todas"){

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const image = document.createElement("img");
        image.src = `./${producto.image}`;
        image.alt = producto.title;

        const title = document.createElement("h3");
        title.textContent = producto.title;

        const price = document.createElement("p");
        price.textContent = `$${producto.price}`;
        

        const boton = document.createElement("button");
        boton.classList.add("btn", "bg-secondary", "text-dark");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {agregarAlCarrito(producto)});

        //Armar tarjeta
        tarjeta.appendChild(image);
        tarjeta.appendChild(title);
        tarjeta.appendChild(price);
        tarjeta.appendChild(boton);

        //Agregar al contenedor
        contenedor.appendChild(tarjeta);
        }
    });
})
.catch(error => {
    console.error('Error: ', error);
    mostrarMensaje("No se pudieron cargar los productos", "Error", "error");
})

};
const mostrarFiltro = (productos) => {
    const category = [{value: "todas", text: "Todas las categorías"}];
    productos.forEach((producto) => {
        let existe = false;
        category.forEach((cat) => {
            if(cat.value === producto.category.value){
                existe = true;
            }
        });
        if(!existe){
            category.push(producto.category);
        } 
    });
    
    //CREADO DE SELECTOR DE CATEGORIA
    const contenedor = document.getElementById("filtro-categoria");
    const filtro = document.createElement("select");
    filtro.classList.add("filtro-select");
    category.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria.value;
        option.textContent = categoria.text;
        filtro.appendChild(option);
    });

    //EVENTO DE FILTRADO
    filtro.addEventListener("change", (elemento) => {
        const option = elemento.target.value;
        renderizarProductos(option);
    });

    contenedor.appendChild(filtro);
}


document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    renderizarProductos("todas");
    actualizarContador(carrito);
})

