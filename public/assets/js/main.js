const senaInput = document.getElementById("sena-input");
const result = document.getElementById("result");
const senaListBody = document.getElementById("sena-list-body");

function showResult(message, type) {
  result.textContent = message;
  result.className = `result ${type}`;
}

function renderBalls(dezenas){
  let ballsHtml = "";
  for (let i = 0; i < dezenas.length; i++){
    ballsHtml += `<span class= "sena-ball"> ${dezenas[i]}</span>`;
  }
  return ballsHtml;
}

function renderSenas(senas) {
  if (senas.length == 0) {
    showResult("Nenhum jogo cadastrado.", "error");
  } else {
    let senaRow = "";
    for (let i = 0; i < senas.length; i++) {
      const dezenas = senas[i].nros.split(/[ ,]+/);
      const balls = renderBalls( dezenas);
      senaRow +=`<div class= "sena-row-balls">${balls}</div> `;
    }
    senaListBody.innerHTML= senaRow;
  }
}

async function loadSenas() {
  const response = await fetch("/senas");
  if (response.ok) {
    const senas = await response.json();
   renderSenas(senas);
  } else {
    showResult("Problema ao carregar o jogo.", "error");
  }
}

async function createSena() {
  const nros = senaInput.value
  .trim()
  .replace(/,/g," ")
  .replace(/\s+/g," ");
  if (nros.split(" ").length == 6) {
    showResult("Cadastrando...", "loading");
    const response = await fetch("/senas", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ nros }),
    });
    if (response.ok) {
      showResult("Jogo cadastrado com sucesso.", "success");
      loadSenas();
    } else {
      showResult("Problemas ao salvar o jogo", "error");
    }
  } else {
    showResult("Entre com 6 dezenas separadas por espaços", "error");
  }
}

senaInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    showResult("", "");
    createSena();
  }
});

loadSenas();
