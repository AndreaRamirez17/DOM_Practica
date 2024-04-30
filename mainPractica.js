//OBTENER ELEMENTOS POR ID
const div1 = document.getElementById("div-1");
console.log(div1);

const divCollection = document.getElementsByTagName("div");
console.log(divCollection);

const p = document.getElementById("p-element");
const usernameInputs = document.getElementsByName("username");
const usernameInput = usernameInputs[0];

console.log(p, usernameInput);

// Events
usernameInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});

// Función para insertar una tarjeta en el contenedor
function insertarTarjeta(tarjeta) {
    const CARDS_CONTAINER = document.getElementById("card-container");
    CARDS_CONTAINER.appendChild(tarjeta);
}
