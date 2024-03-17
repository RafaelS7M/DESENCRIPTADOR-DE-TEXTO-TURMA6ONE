const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");
const textAlert = document.querySelector(".alert");
const btnEncript = document.getElementById("encript");

console.log("Ao clicar na logo do desencriptador você consegue atualizar a página sem guardar métodos no cache  :) ");

const notification = (text, img) => {
  const imgAlert = document.createElement("img");
  textAlert.textContent = "";
  textAlert.classList.add("active");
  setTimeout(() => {
    textAlert.classList.remove("active");
  }, 2600);
  imgAlert.src = img;
  imgAlert.classList.add("icon-head");
  textAlert.textContent = text;
  textAlert.appendChild(imgAlert);
};
inputText.focus();


function encriptText() {
  let textResult = document
    .getElementById("inputText")
    .value.replace(/e/, "enter")
    .replace(/i/, "imes")
    .replace(/a/, "ai")
    .replace(/o/, "ober")
    .replace(/u/, "ufat");

  if (textResult.length === 0 || /^\s+$/.test(textResult)) {
    notification(
      "Este campo de texto está vazio, escreva uma palavra",
      "imagem/icone-perdeu.png"
    );
  } else if (/[^a-z ]/.test(textResult)) {
    notification(
      "Só é permitido letras minusculas e sem acento",
      "imagem/icone-perdeu.png"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResult;
  inputText.value = "";
  inputText.focus();
}

btnEncript.addEventListener("click", encriptText);

function decryptText() {
  let textResultDec = document
    .getElementById("inputText")
    .value.replace(/enter/, "e")
    .replace(/imes/, "i")
    .replace(/ai/, "a")
    .replace(/ober/, "o")
    .replace(/ufat/, "u");

  document.getElementById("text-result").innerHTML = textResultDec;

  if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
    notification(
      "Este campo de texto está vazio, escreva uma palavra",
      "imagem/icone-perdeu.png"
    );
  } else if (/[^a-z ]/.test(textResultDec)) {
    notification(
      "Só é permitido letras minusculas e sem acento",
      "imagem/icone-perdeu.png"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResultDec;
  inputText.value = "";
  inputText.focus();
}

function copyToClipBoard() {
  let copyText = document.getElementById("text-result").textContent;
  console.log({ copyText });
  navigator.clipboard.writeText(copyText).then(() => {
    if (copyText.length === 0 || /^\s+$/.test(copyText)) {
      notification("Não possue texto para copiar", "imagem/icone-perdeu.png");
    } else {
      notification("Texto copiado para área de transferência", "imagem/icone-acertou.png");
    }
  });
  inputText.focus();
}
