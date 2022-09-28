const form = document.getElementById("form");
const title = document.getElementById("title");
const descricao = document.getElementById("descricao");
const preco = document.getElementById("preco");
const ativo = document.getElementById("ativo");
const axios = require("axios");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  checkInputs();
});

function checkInputs() {
  const titleValue = title.value;
  const descricaoValue = descricao.value;
  const precoValue = preco.value;
  const ativoValue = ativo.value;

  if (titleValue === "") {
    setErrorFor(title, "Titulo é obrigatorio.");
  } else {
    setSuccessFor(title);
  }

  if (descricaoValue === "") {
    setErrorFor(descricao, "Descrição é obrigatorio");
  } else {
    setSuccessFor(descricao);
  }

  if (precoValue === "") {
    setErrorFor(preco, "Preço é obrigatorio");
  } else {
    setSuccessFor(preco);
  }

  if (ativoValue === "") {
    setErrorFor(ativo, "Informe se está ativo ou não");
  } else {
    setSuccessFor(ativo);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control sucess";
  });

  if (formIsValid) {
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
