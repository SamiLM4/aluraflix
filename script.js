function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesTela(filmeFavorito);
  } else {
    console.error("Endereço de filme invalido !!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementolistaFilmes = document.getElementById("listaFilmes");
  elementolistaFilmes.innerHTML =
    elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}
