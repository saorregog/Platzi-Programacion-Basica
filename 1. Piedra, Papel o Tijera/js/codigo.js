// JUEGO DE PIEDRA, PAPEL O TIJERA

// DEFINICIÓN DE VARIABLES DE VICTORIAS
let victoriasJugador = 0;
let victoriasPc = 0;

// VENCE QUIEN GANE 3 VECES
while (victoriasJugador !== 3 && victoriasPc !== 3) {
  // ELECCIÓN NUMÉRICA JUGADOR
  // 1 es Piedra, 2 es Papel y 3 es Tijera
  let jugador = Number(
    prompt("Elige: 1 para PIEDRA, 2 para PAPEL o 3 para TIJERA")
  );

  while (jugador !== 1 && jugador !== 2 && jugador !== 3) {
    jugador = Number(
      prompt(
        "Solo puedes elegir tres valores: 1 (PIEDRA), 2 (PAPEL) o 3 (TIJERA)"
      )
    );
  }

  // FUNCIÓN DE ELECCIÓN ALEATORIA
  function eleccionAleatoria(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  // ELECCIÓN NUMÉRICA PC
  let pc = eleccionAleatoria(1, 3);

  // FUNCIÓN DE ELECCIÓN NUMÉRICA A ELECCIÓN TEXTUAL
  function eleccionTextual(eleccionNumerica) {
    switch (eleccionNumerica) {
      case 1:
        return "PIEDRA 🥌";
      case 2:
        return "PAPEL 🧻";
      case 3:
        return "TIJERA ✂";
    }
  }

  // ELECCIÓN TEXTUAL JUGADOR
  let eleccionJugador = eleccionTextual(jugador);

  // ELECCIÓN TEXTUAL PC
  let eleccionPc = eleccionTextual(pc);

  alert("Elegiste " + eleccionJugador);

  alert("El PC eligió " + eleccionPc);

  // FUNCIÓN DE COMBATE
  function combateJugadorPc() {
    if (jugador === pc) {
      alert("¡¡EMPATE 🤼!!");
    } else if (
      (jugador === 1 && pc === 3) ||
      (jugador === 2 && pc === 1) ||
      (jugador === 3 && pc === 2)
    ) {
      victoriasJugador += 1;
      alert("¡¡GANASTE 🥳!!");
    } else {
      victoriasPc += 1;
      alert("¡¡PERDISTE 😢!!");
    }
  }

  // COMBATE
  combateJugadorPc();
}

// FUNCIÓN DE MARCADOR Y VENCEDOR
function victoria() {
  alert(
    "EL MARCADOR FINAL ES: " +
      victoriasJugador +
      " victoria(s) para el Jugador y " +
      victoriasPc +
      " victoria(s) para el PC"
  );
  if (victoriasJugador === 3) {
    document.write("<strong>¡¡El Jugador es el gran vencedor 🥳!!</strong>");
  } else {
    document.write("<strong>¡¡El PC es el gran vencedor 😢!!</strong>");
  }
}

// MARCADOR Y VENCEDOR
victoria();
