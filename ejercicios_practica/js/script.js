"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/

async function mostrarInformacion (informacion) { 
    // Obtengo el nombre del episodio donde se vio por ultima vez
    let ultimaAparicion = await fetch(informacion.episode[0]);
    ultimaAparicion = await ultimaAparicion.json();

    let html = document.createElement("div");
    html.innerHTML = `<img src="${informacion.image}" alt="${informacion.name}"/>
    <h2>${informacion.name}</h2>
    <p>${informacion.status} - ${informacion.species}</p>
    <h4>Last know location:</h4>
    <p>${informacion.location.name}</p>
    <h4>First seen in:</h4>
    <p>${ultimaAparicion.name}</p>
    `;
    document.body.appendChild(html);
};


document.getElementById("btnConsultar").onclick = async () => {
    let nombre = document.getElementById("personaje").value;
    let informacion = await fetch (`https://rickandmortyapi.com/api/character/?name=${nombre}`);
    if (!informacion.ok){
        throw new Error (informacion.status);
    }
    else {
        informacion = await informacion.json();
        mostrarInformacion(informacion.results[0]);
    }
}