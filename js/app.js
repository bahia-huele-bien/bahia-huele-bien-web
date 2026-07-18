const contenedor = document.getElementById("productos");

let carrito = [];

function mostrarProductos() {

    contenedor.innerHTML = "";

    productos.forEach((producto, i) => {

        contenedor.innerHTML += `

        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toLocaleString("es-AR")}
            </p>

            <button onclick="agregar(${i})">
                Agregar al carrito
            </button>

            <button onclick="comprar(${i})">
                Comprar por WhatsApp
            </button>

        </div>

        `;

    });

}

mostrarProductos();


function agregar(i) {

    carrito.push(productos[i]);

    alert(productos[i].nombre + " agregado al carrito.");

}


function comprar(i) {

    let mensaje =
        "Hola, quiero comprar el perfume " +
        productos[i].nombre +
        ". ¿Sigue disponible?";

    window.open(
        "https://wa.me/5492915020739?text=" +
        encodeURIComponent(mensaje)
    );

}
