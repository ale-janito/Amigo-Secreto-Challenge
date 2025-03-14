let amigos = [];
let ganadores = [];  // Lista para almacenar los últimos ganadores

/*function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}
*/

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";

    // Añadir la animación al input
    input.classList.add("input-animado");  // Aplica la animación de salto

    // O si prefieres un destello, usa esto:
    // input.classList.add("input-destello");

    // Elimina la clase de animación después de 0.3s (el tiempo de duración de la animación)
    setTimeout(() => {
        input.classList.remove("input-animado");
        // O si usaste destello:
        // input.classList.remove("input-destello");
    }, 300); // Debe coincidir con la duración de la animación en CSS
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function reinicioSorteo() {
    amigos = [];
    ganadores = [];  // Limpiar la lista de ganadores
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";  // Limpiar el resultado
    actualizarUltimosGanadores();  // Limpiar los últimos ganadores
    alert("El conteo de amigos fue reiniciado.");
}


function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Debe haber al menos un participante para realizar el sorteo.");
        return;
    }
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "🤔 Sorteando..."; 
    
    setTimeout(() => {
        let ganador = amigos[Math.floor(Math.random() * amigos.length)];
        mostrarResultado(ganador);
        actualizarGanadores(ganador);  // Actualizar los ganadores
    }, 1500); // Simula un retraso de 1.5 segundos antes de mostrar el resultado
}

function mostrarResultado(ganador) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Borra el resultado anterior

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: "${ganador}" 🎉`;
    
    // Agregar animación manualmente si se recarga
    li.style.animation = "fadeIn 0.5s ease-in-out";

    listaResultado.appendChild(li);
}

function actualizarGanadores(ganador) {
    // Agregar el nuevo ganador a la lista
    ganadores.unshift(ganador);  // Insertar al inicio

    // Limitar la lista a los 3 últimos ganadores
    if (ganadores.length > 3) {
        ganadores.pop();  // Eliminar el último elemento si hay más de 3
    }

    actualizarUltimosGanadores();  // Mostrar los últimos 3 ganadores
}

function actualizarUltimosGanadores() {
    const listaGanadores = document.getElementById("ultimosGanadores");
    listaGanadores.innerHTML = "";  // Limpiar la lista antes de actualizar

    ganadores.forEach(ganador => {
        const li = document.createElement("li");
        li.textContent = ganador;
        listaGanadores.appendChild(li);
    });
}
