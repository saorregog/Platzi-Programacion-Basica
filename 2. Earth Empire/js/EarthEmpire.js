// DECLARACIÓN DE VARIABLES DE ATAQUE (JUGADOR Y ENEMIGO)
let ataqueSeleccionado = "";
let ataqueEnemigo = "";

// FUNCIÓN DE SELECCIÓN ALEATORIA DE NÚMERO
function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// FUNCIÓN DE SELECCIÓN DE GENERALES (JUGADOR Y ENEMIGO)
function seleccionarGenerales() {
  // SELECCIÓN DE GENERAL DE JUGADOR
  let inputAxioco = document.getElementById("axioco");
  let inputHagnon = document.getElementById("hagnon");
  let inputProtomaco = document.getElementById("protomaco");

  let generalSeleccionado = "";

  if (inputAxioco.checked) {
    generalSeleccionado = "<strong>Axíoco</strong>";
  } else if (inputHagnon.checked) {
    generalSeleccionado = "<strong>Hagnón</strong>";
  } else if (inputProtomaco.checked) {
    generalSeleccionado = "<strong>Protomaco</strong>";
  } else {
    return alert("Selecciona un general");
  }

  let spanGeneralSeleccionado = document.getElementById("general-seleccionado");

  spanGeneralSeleccionado.innerHTML = generalSeleccionado;

  //SELECCIÓN DE GENERAL ENEMIGO (ALEATORIA)
  let numeroGeneralEnemigo = numeroAleatorio(1, 3);
  let generalEnemigo = "";

  switch (numeroGeneralEnemigo) {
    case 1:
      generalEnemigo = "<strong>Téleclo</strong>";
      break;
    case 2:
      generalEnemigo = "<strong>Anaxándridas</strong>";
      break;
    case 3:
      generalEnemigo = "<strong>Leonidas</strong>";
      break;
  }

  let spanGeneralEnemigo = document.getElementById("general-enemigo");

  spanGeneralEnemigo.innerHTML = generalEnemigo;
}

// FUNCIONES DE DEFINICIÓN DE VARIABLE DE ATAQUE (JUGADOR)
function ataqueCaballeria() {
  ataqueSeleccionado = "Caballería";
  alert("Seleccionaste el ataque del bloque de Caballería");
}

function ataqueInfanteria() {
  ataqueSeleccionado = "Infantería";
  alert("Seleccionaste el ataque del bloque de Infantería");
}

function ataqueArqueros() {
  ataqueSeleccionado = "Arqueros";
  alert("Seleccionaste el ataque del bloque de Arqueros");
}

// SE REFERENCIA EN LA VARIABLE EL BOTÓN DE SELECCIÓN DE GENERAL
let botonSeleccionGeneral = document.getElementById("boton-seleccion-general");

// SE EJECUTA LA FUNCIÓN DE SELECCIÓN DE GENERAL CADA VEZ QUE SE HACE CLICK EN EL BOTÓN DE SELECCIÓN DE GENERAL
botonSeleccionGeneral.addEventListener("click", seleccionarGenerales);

// SE REFERENCIA EN LAS VARIABLES LOS BOTONES DE SELECCIÓN DEL BLOQUE DE ATAQUE
let botonCaballeria = document.getElementById("boton-caballeria");
let botonInfanteria = document.getElementById("boton-infanteria");
let botonArqueros = document.getElementById("boton-arqueros");

// SE EJECUTA LA FUNCIÓN DE ATAQUE DEL BLOQUE DE ATAQUE CADA VEZ QUE SE HACE CLICK EN EL BOTÓN DEL BLOQUE DE ATAQUE CORRESPONDIENTE
botonCaballeria.addEventListener("click", ataqueCaballeria);
botonInfanteria.addEventListener("click", ataqueInfanteria);
botonArqueros.addEventListener("click", ataqueArqueros);
