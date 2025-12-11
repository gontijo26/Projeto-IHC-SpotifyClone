//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a saudação com base na hora atual
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

  //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);

// NAVEGAÇÃO (VOLTAR/AVANÇAR)
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  history.back();
});

arrowRight.addEventListener('click', () => {
  history.forward();
});

// EFEITO DE SOMBRA NO HEADER AO ROLAR
const mainContainer = document.querySelector('.main-container');
const headerNavigation = document.querySelector('.header__navigation');

mainContainer.addEventListener('scroll', () => {
  if (mainContainer.scrollTop > 0) {
    headerNavigation.classList.add('scrolled');
  } else {
    headerNavigation.classList.remove('scrolled');
  }
});

// ----------------- PLAYER DE ÁUDIO -----------------

const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const volumeBar = document.getElementById('volume-bar');
const currentTrackName = document.getElementById('current-track-name');
const currentTrackArtist = document.getElementById('current-track-artist');
const currentTrackImage = document.getElementById('current-track-image');

let isPlaying = false;

// Função para formatar o tempo (segundos para MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
  return `${minutes}:${formattedSeconds}`;
}

// Alternar Play/Pause
playPauseButton.addEventListener('click', () => {
  if (audioPlayer.src) {
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  } else {
    alert('Nenhuma música selecionada para tocar. Tente usar a busca!');
  }
});

// Botão de Voltar (simplesmente reinicia a música)
prevButton.addEventListener('click', () => {
  if (audioPlayer.src) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  }
});

// Evento de Play
audioPlayer.addEventListener('play', () => {
  isPlaying = true;
  playPauseButton.querySelector('i').className = 'fa fa-pause';
});

// Evento de Pause
audioPlayer.addEventListener('pause', () => {
  isPlaying = false;
  playPauseButton.querySelector('i').className = 'fa fa-play';
});

// Atualizar barra de progresso e tempo
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  if (!isNaN(duration)) {
    progressBar.value = (currentTime / duration) * 100;
    currentTimeElement.textContent = formatTime(currentTime);
  }
});

// Quando a música carrega
audioPlayer.addEventListener('loadedmetadata', () => {
  durationElement.textContent = formatTime(audioPlayer.duration);
  progressBar.value = 0;
});

// Mudar a posição da música
progressBar.addEventListener('input', () => {
  const duration = audioPlayer.duration;
  if (!isNaN(duration)) {
    audioPlayer.currentTime = (progressBar.value / 100) * duration;
  }
});

// Mudar o volume
volumeBar.addEventListener('input', () => {
  audioPlayer.volume = volumeBar.value / 100;
});

// Função para tocar uma música (será chamada pelo search.js)
window.playTrack = (trackName, artistName, imageUrl, audioUrl) => {
  const nowPlayingBar = document.querySelector('.now-playing-bar');
  nowPlayingBar.classList.add('active'); // Mostra o player

  currentTrackName.textContent = trackName;
  currentTrackArtist.textContent = artistName;
  currentTrackImage.src = imageUrl;
  currentTrackImage.style.display = 'block';
  audioPlayer.src = audioUrl;
  audioPlayer.play();
};

// ----------------- CORREÇÃO NA EXIBIÇÃO DE ARTISTAS (search.js) -----------------
// A função de exibir artistas está no search.js, mas vou adicionar um placeholder
// para que o card do artista possa chamar a função playTrack.

// A função de busca e exibição de artistas está no search.js, mas vou adicionar
// uma função dummy aqui para simular a chamada de música.
// O search.js precisará ser modificado para chamar window.playTrack.

// Exemplo de como o search.js deve chamar:
// const artistCard = document.createElement('div');
// artistCard.addEventListener('click', () => {
//   window.playTrack(
//     'Música de Exemplo', 
//     artist.name, 
//     artist.urlImg, 
//     './src/assets/audio/exemplo.mp3' // URL do seu arquivo de áudio
//   );
// });

// Para que o player funcione, você precisará de um arquivo de áudio de exemplo.
// Vou criar um placeholder para o arquivo de áudio.
// Você precisará adicionar um arquivo de áudio real em src/assets/audio/exemplo.mp3


