// capturando elementos inputText
let inputRed = document.querySelector('#inputRed');
let inputGreen = document.querySelector('#inputGreen');
let inputBlue = document.querySelector('#inputBlue');

// capturando ranges
let rangeRed = document.querySelector('#rangeRed');
let rangeGreen = document.querySelector('#rangeGreen');
let rangeBlue = document.querySelector('#rangeBlue');

function start() {
  rangeRed.addEventListener('input', rangeValueChange);
  rangeGreen.addEventListener('input', rangeValueChange);
  rangeBlue.addEventListener('input', rangeValueChange);
}

function rangeValueChange() {
  inputRed.value = rangeRed.value;
  inputGreen.value = rangeGreen.value;
  inputBlue.value = rangeBlue.value;
}

function rgb() {
  let RGBox = `${inputRed.value},${inputGreen.value},${inputBlue.value}`;
  document.querySelector('#RGBox').style.backgroundColor = 'rgb(' + RGBox + ')';
}

function footerLetters() {
  const footerDateId = document.querySelector('#footerDate');
  const footerLink = document.querySelector('#footerLink');

  let ano = new Date().getFullYear();
  const link = `Desafio RGB - Bootcamp Full Stack IGTI`;

  footerLink.href = 'https://www.igti.com.br/';
  footerLink.target = '_blank';
  footerLink.appendChild(document.createTextNode(`${link}`));

  footerDateId.appendChild(document.createTextNode(`${ano}`));
}

start();
footerLetters();
