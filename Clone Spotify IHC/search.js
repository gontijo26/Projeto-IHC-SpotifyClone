const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistsSection = document.getElementById("result-playlists");
const artistName = document.getElementById("artist-name");
const artistImg = document.getElementById("artist-img");

const artistLink = document.querySelector("#result-artist .card-text a");

let allArtists = []; // Variável para armazenar todos os artistas

// Função para buscar todos os artistas e preencher a variável global
async function fetchAllArtists() {
  try {
    const response = await fetch("./api-artists/db.json");
    const data = await response.json();
    allArtists = data.artists;
  } catch (error) {
    console.error("Erro ao buscar todos os artistas:", error);
  }
}

// Função para exibir um único artista no card de resultado de busca
function displayArtist(artistFound) {
  // se achou, preenche o card
  artistName.textContent = artistFound.name;
  artistImg.src = artistFound.urlImg;
  
  artistImg.alt = artistFound.name;

  // Adiciona o evento de clique para tocar a música
  const playButton = document.querySelector('#result-artist .play');
  playButton.onclick = (event) => {
    event.stopPropagation(); // Evita que o clique no botão propague para o card
    // Chama a função global para tocar a música
    window.playTrack(
        artistFound.trackName, // Nome da música real
      artistFound.name, 
      artistFound.urlImg, 
      'src/assets/audio/exemplo.mp3' // URL de áudio de exemplo local
    );
  };

  if (artistLink) {
    // se quiser, depois você troca esse href pra ir pro Spotify real
    artistLink.href = "#";
    artistLink.title = artistFound.name;
  }

  // mostra o card e esconde playlists
  resultArtist.classList.remove("hidden");
  playlistsSection.classList.add("hidden");
}

// Função de busca original, agora usando a variável global
async function searchArtists(searchTerm) {
  // deixa tudo minúsculo pra não ter problema de caixa
  const term = searchTerm.toLowerCase().trim();

  // procura todos os artistas cujo nome contenha o termo digitado
  const filteredArtists = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(term)
  );

  if (filteredArtists.length === 0) {
    // se NÃO achou ninguém:
    // - esconde o card de artista
    // - mostra as playlists de novo
    resultArtist.classList.add("hidden");
    playlistsSection.classList.remove("hidden");
    return;
  }

  displayAllArtists(filteredArtists);
}

// Função para exibir todos os artistas na seção principal
function displayAllArtists(artists) {
  const allArtistsSection = document.getElementById('result-playlists');
  
  // Limpa o conteúdo estático (playlists)
  allArtistsSection.innerHTML = `
    <div class="playlist">
      <h1 id="greeting"></h1>
      <h2 class="session">Todos os Artistas</h2>
    </div>
    <div class="offer__scroll-container">
      <div class="offer__list">
        <section class="offer__list-item grid-container" id="all-artists-section">
          <!-- Artistas serão carregados aqui -->
        </section>
      </div>
    </div>
  `;

  const artistsContainer = document.getElementById('all-artists-section');
  artistsContainer.innerHTML = '';

  artists.forEach(artist => {
    const card = document.createElement('a');
    card.href = '#';
    card.className = 'cards card-artist-item'; // Nova classe para estilização
    card.onclick = (event) => {
        event.preventDefault();
        // Ao clicar no card, exibe o artista no card de busca
        displayArtist(artist);
    };
    card.innerHTML = `
      <div class="cards card-artist">
        <img src="${artist.urlImg}" alt="${artist.name}" class="artist-img"/>
        <span class="artist-name-text">${artist.name}</span>
        <p class="artist-type-text">Artista</p>
        <div class="play">
          <span class="fa fa-solid fa-play" onclick="window.playTrack('${artist.trackName}', '${artist.name}', '${artist.urlImg}', 'src/assets/audio/exemplo.mp3'); event.preventDefault(); event.stopPropagation();"></span>
        </div>
      </div>
    `;
    artistsContainer.appendChild(card);
  });

  // Esconde o card de busca de artista e mostra a nova seção
  resultArtist.classList.add("hidden");
  allArtistsSection.classList.remove("hidden");
}

// Função para filtrar artistas por gênero (será chamada pelos botões)
window.filterArtistsByGenre = (genre) => {
  // Se o gênero for "all", mostra todos os artistas
  if (genre === 'all') {
    displayAllArtists(allArtists);
    return;
  }

  // Se for um gênero específico, filtra e mostra todos os artistas daquele gênero
  const filteredArtists = allArtists.filter((artist) =>
    artist.genre.toLowerCase() === genre.toLowerCase()
  );

  if (filteredArtists.length > 0) {
    displayAllArtists(filteredArtists); // Reutiliza a função de exibir todos, mas com a lista filtrada
  } else {
    // Se não encontrar, esconde o card e mostra playlists
    resultArtist.classList.add("hidden");
    playlistsSection.classList.remove("hidden");
  }
};



// Inicializa a busca de artistas ao carregar a página
fetchAllArtists();

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
