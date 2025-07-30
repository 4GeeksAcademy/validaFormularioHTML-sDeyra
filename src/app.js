import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const card = document.getElementById("validationCustom01")
const cvc = document.getElementById("validationCustom02")
const amount = document.getElementById("validationCustomUsername")
const name = document.getElementById("validationCustom03")
const lastName = document.getElementById("validationCustom04")
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const method1 = document.getElementById("radioDefault1");
const method2 = document.getElementById("radioDefault2");
const method3 = document.getElementById("radioDefault3");
const method4 = document.getElementById("radioDefault4");
const message = document.getElementById("message-text");
const buttonCancel = document.getElementById("buttonCancel");
const buttonSend = document.getElementById("buttonSend");

let esValido = true;

buttonSend.addEventListener("click", function(e) {
  e.preventDefault();
  esValido = true; 

  if (
    card.value === "" ||
    cvc.value === "" ||
    amount.value === "" ||
    name.value === "" ||
    lastName.value === "" ||
    city.value === "" ||
    state.value === "" ||
    postalCode.value === "" ||
    message.value === ""
  ) {
    alert("Por favor, completar todos los campos.");
    esValido = false;
  }

  if (esValido) {
    alert("Formulario valido");
  }
});
 


window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
