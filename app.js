// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let amigo = "";
let aleatorio = "";
let amigoSelect = "";

function agregarAmigo() {
    amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("ingrese un valor correcto")
        return;
    }
    if (nombres.includes(amigo)) {
        alert(`El nombre: ${amigo} ya se encuentra en la lista`);
        return;
    }
    nombres.push(amigo);
    console.log(nombres);
    const li = document.createElement("li");
    li.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(li);
    document.getElementById("amigo").value = "";
    //focus al input
    document.getElementById("amigo").focus();
}

function sortearAmigo() {

    aleatorio = Math.floor(Math.random() * nombres.length);
    amigoSelect = nombres[aleatorio];
    console.log(amigoSelect);
    console.log(`El amigo secreto es: ${amigoSelect}`);

    const li = document.createElement("li");
    li.textContent = amigoSelect;
    document.getElementById("resultado").appendChild(li);

}

function reinicio() {
    nombres = [];
    document.getElementById("sortear").disabled = false;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
    console.log("Reinicio del juego");
}