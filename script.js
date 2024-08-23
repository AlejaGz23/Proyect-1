let inputTexto = document.querySelector("#entradaTexto");
let cardContainer = document.querySelector(".card-container");

let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");

// Función para validar el texto
function validarTexto(texto) {
  // Expresión regular que busca mayúsculas o caracteres especiales
  const regex = /[^a-z\s]/;

  if (regex.test(texto)) {
    alert("El texto no debe contener mayúsculas ni caracteres especiales.");
    return false;
  }
  return true;
}

btnEncriptar.addEventListener("click", () => {
  let texto = inputTexto.value;

  if (texto === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }

  if (!validarTexto(texto)) {
    return; // Detiene la ejecución si el texto no es válido
  }

  cardContainer.innerHTML = "";
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="card-body">
          <p class="card-text">${encriptar(texto)}</p>
      </div>
      <div class="card-footer">
          <button class="secondary-button button-copy">Copiar</button>
      </div>
    `;
  inputTexto.value = "";
  cardContainer.appendChild(card);
  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto encriptado
  card.querySelector(".button-copy").addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

btnDesencriptar.addEventListener("click", () => {
  let texto = inputTexto.value;

  if (texto === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }

  if (!validarTexto(texto)) {
    return; // Detiene la ejecución si el texto no es válido
  }

  cardContainer.innerHTML = "";
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <div class="card-body">
            <p class="card-text">${desencriptar(texto)}</p>
        </div>
        <div class="card-footer">
          <button class="secondary-button button-copy">Copiar</button>
        </div>
      `;
  inputTexto.value = "";
  cardContainer.appendChild(card);
  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto desencriptado
  card.querySelector(".button-copy").addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

function encriptar(texto) {
  let textoEncriptado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoEncriptado += "ai";
    } else if (texto[i] === "e") {
      textoEncriptado += "enter";
    } else if (texto[i] === "i") {
      textoEncriptado += "imes";
    } else if (texto[i] === "o") {
      textoEncriptado += "ober";
    } else if (texto[i] === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += texto[i];
    }
  }

  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let texto = "";

  for (let i = 0; i < textoEncriptado.length; i++) {
    if (textoEncriptado[i] === "a" && textoEncriptado[i + 1] === "i") {
      texto += "a";
      i++;
    } else if (
      textoEncriptado[i] === "e" &&
      textoEncriptado[i + 1] === "n" &&
      textoEncriptado[i + 2] === "t" &&
      textoEncriptado[i + 3] === "e" &&
      textoEncriptado[i + 4] === "r"
    ) {
      texto += "e";
      i += 4;
    } else if (
      textoEncriptado[i] === "i" &&
      textoEncriptado[i + 1] === "m" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "s"
    ) {
      texto += "i";
      i += 3;
    } else if (
      textoEncriptado[i] === "o" &&
      textoEncriptado[i + 1] === "b" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "r"
    ) {
      texto += "o";
      i += 3;
    } else if (
      textoEncriptado[i] === "u" &&
      textoEncriptado[i + 1] === "f" &&
      textoEncriptado[i + 2] === "a" &&
      textoEncriptado[i + 3] === "t"
    ) {
      texto += "u";
      i += 3;
    } else {
      texto += textoEncriptado[i];
    }
  }

  return texto;
}
