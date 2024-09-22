import data from "./data.js";

const juegos = data;

console.log(juegos);

//EVENTOS
document.getElementById("ordenAlfa").addEventListener("click", function () {
    ordenarAlfa(juegos);
});

document.getElementById("categoria").addEventListener("change", function () {
    filtrarPorTipo(juegos, document.getElementById("categoria").value);
});
document.getElementById("txtNombre").addEventListener("input", function () {
    filtrarPorNombre(juegos, document.getElementById("txtNombre").value.toLowerCase());
})

//FUNCIONES

function mostrarEnHTML2(juegos) {
    document.getElementById("general1").style.display = "none";
    document.getElementById("cuadroGeneral2").style.display = "block";
    document.getElementById("cuadroGeneral2").innerHTML = "";
    for (let i = 0; i < juegos.length; i++) {
        document.getElementById("cuadroGeneral2").innerHTML += `
            
            <div class="ordenar">
            
                <a href="${juegos[i].link}">
                    <img class="imagenn" src="${juegos[i].imagen}" alt="${juegos[i].nombre}">
                </a>
                <div class="boxx">
                <a href="${juegos[i].link}">
                         <br><br>
                        <p>${juegos[i].creador}</p>
                        <p>${juegos[i].puntuación}</p>
                         <h3>${juegos[i].nombre}</h3>
                    </a>
                </div>
            </div>
        `;
    }
    
}

function filtrarPorNombre(juegos, txtNombre) {

    const filtrarPorNombre = juegos.filter(function (juego) { return juego.nombre.toLowerCase().includes(txtNombre) });
    mostrarEnHTML2(filtrarPorNombre)
}

function ordenarAlfa(juegos) {

    const juegosOrdenados = juegos.slice();
    juegosOrdenados.sort(function (a, b) { return a.nombre.localeCompare(b.nombre); });
    mostrarEnHTML2(juegosOrdenados);
}

function filtrarPorTipo(juegos, categoria) {
    const filtrarPorCategoria = juegos.filter(function (juego) {
        return juego.categoria.includes(categoria);
    });
    console.log(filtrarPorCategoria.length)
    mostrarEnHTML2(filtrarPorCategoria);
}


