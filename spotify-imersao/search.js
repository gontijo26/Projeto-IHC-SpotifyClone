const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistsSection = document.getElementById("result-playlists");
const artistName = document.getElementById("artist-name");
const artistImg = document.getElementById("artist-img");
const artistLink = document.querySelector("#result-artist .card-text a");

async function searchArtists(searchTerm) {
  try {
    const response = await fetch("http://localhost:3000/artists");
    const artists = await response.json();

    // deixa tudo minúsculo pra não ter problema de caixa
    const term = searchTerm.toLowerCase().trim();

    // procura um artista cujo nome contenha o termo digitado
    const artistFound = artists.find((artist) =>
      artist.name.toLowerCase().includes(term)
    );

    if (!artistFound) {
      // se NÃO achou ninguém:
      // - esconde o card de artista
      // - mostra as playlists de novo
      resultArtist.classList.add("hidden");
      playlistsSection.classList.remove("hidden");
      return;
    }

    // se achou, preenche o card
    artistName.textContent = artistFound.name;
    artistImg.src = artistFound.urlImg;
    artistImg.alt = artistFound.name;

    if (artistLink) {
      // se quiser, depois você troca esse href pra ir pro Spotify real
      artistLink.href = "#";
      artistLink.title = artistFound.name;
    }

    // mostra o card e esconde playlists
    resultArtist.classList.remove("hidden");
    playlistsSection.classList.add("hidden");
  } catch (error) {
    console.error("Erro ao buscar artistas:", error);
  }
}

searchInput.addEventListener("input", function () {
  const value = searchInput.value;

  // se apagar a busca, volta pras playlists
  if (!value.trim()) {
    resultArtist.classList.add("hidden");
    playlistsSection.classList.remove("hidden");
    return;
  }

  searchArtists(value);
});
