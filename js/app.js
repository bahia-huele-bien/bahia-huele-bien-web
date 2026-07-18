const contenedor = document.getElementById("productos");


function mostrarProductos() {

    contenedor.innerHTML = "";


    productos.forEach((producto, i) => {

        contenedor.innerHTML += `

        <article class="card">

            <div class="imagen-producto">

                <img

                    src="${producto.imagen}"

                    alt="${producto.nombre}"

                >

            </div>


            <div class="info-producto">

                <h3>${producto.nombre}</h3>

                <p class="precio">

                    $${producto.precio.toLocaleString("es-AR")}

                </p>


                <button

                    class="boton-comprar"

                    onclick="comprar(${i})"

                >

                    Comprar por WhatsApp

                </button>

            </div>

        </article>

        `;

    });

}


function comprar(i) {

    const producto = productos[i];


    const mensaje =

        "Hola! 👋 Quiero consultar por el perfume " +

        producto.nombre +

        ". ¿Sigue disponible?";


    const url =

        "https://wa.me/5492915020739?text=" +

        encodeURIComponent(mensaje);


    window.open(url, "_blank");

}


mostrarProductos();
