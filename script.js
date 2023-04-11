//criar variavel intervalo
/*crie um cronometro utilizando o evento 'window.onload' com tres botoes com os seguintes eventos 
(''começar'', ''pausar'', ''zerar'',). Utilize CSS para dar aspecto visual (seja criativo)*/

//criar funcao comecar cronometro pra tirar o 001 do conometro

let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let intervalo;

function atualizarCronometro() {
  milissegundos++;

  if (milissegundos >= 1000) {
    milissegundos = 0;
    segundos++;
  }

  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos >= 60) {
    minutos = 0;
  }

  let displayMilissegundos = milissegundos;
  let displaySegundos = segundos;
  let displayMinutos = minutos;

  if (displayMilissegundos < 10) {
    displayMilissegundos = "00" + displayMilissegundos;
  } else if (displayMilissegundos < 100) {
    displayMilissegundos = "0" + displayMilissegundos;
  }

  if (displaySegundos < 10) {
    displaySegundos = "0" + displaySegundos;
  }

  if (displayMinutos < 10) {
    displayMinutos = "0" + displayMinutos;
  }

  document.getElementById("minutos").innerHTML = displaySegundos;
  document.getElementById("segundos").innerHTML = displayMinutos;
  document.getElementById("milissegundos").innerHTML = displayMilissegundos;
}

function comecarCronometro() {
  clearInterval(intervalo);
  intervalo = setInterval(atualizarCronometro, 1);
}

function pausarCronometro() {
  clearInterval(intervalo);
}

function zerarCronometro() {
  clearInterval(intervalo);
  minutos = 0;
  segundos = 0;
  milissegundos = 0;
  atualizarCronometro();
}

window.onload = function() {
  atualizarCronometro();
  document.getElementById("botao-comecar").addEventListener("click", comecarCronometro);
  document.getElementById("botao-pausar").addEventListener("click", pausarCronometro);
  document.getElementById("botao-zerar").addEventListener("click", zerarCronometro);
}
