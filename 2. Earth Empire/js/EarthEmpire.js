function seleccionarGeneral() {
  let inputAxioco = document.getElementById("axioco");
  let inputHagnon = document.getElementById("hagnon");
  let inputProtomaco = document.getElementById("protomaco");

  let general = "";
  if (inputAxioco.checked) {
    general = "axioco";
    alert(general);
  } else if (inputHagnon.checked) {
    general = "hagnon";
    alert(general);
  } else if (inputProtomaco.checked) {
    general = "protomaco";
    alert(general);
  } else {
    alert("Selecciona un general");
  }
}

let botonSeleccionGeneral = document.getElementById("boton-seleccion-general");
botonSeleccionGeneral.addEventListener("click", seleccionarGeneral);
