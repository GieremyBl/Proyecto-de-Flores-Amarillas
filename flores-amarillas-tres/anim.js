// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {text: "'Cause all of the small things that you do", time: 44 },
  { text: "Are what remind me why I fell for you", time: 52 },
  { text: "And when we're apart and I'm missing you", time: 58 },
  { text: "I close my eyes and all I see is you", time: 64 },
  { text: "And the small things you do", time: 70 },
  {text: "Na, na, na, na, na, na, na, na", time: 74 },
  { text: "Na, na, na, na, na, na, na, na", time: 76 },
  { text: "Na, na, na, na, na, na, na, na", time: 79 },
  { text: "When you call me at nitght while you're out getting hight with your friends", time: 82 },
  { text: "(Out with your friends)", time: 90},
  { text: "Every hi, every bye, every I love you you've ever said", time: 94 },
  { text: "(You've ever said)", time: 103},
  { text: "'Cause all of the small things that you do", time: 105 },
  { text: "Are what remind me why I fell for you", time: 112 },
  { text: "And when we're apart and I'm missing you", time: 118 },
  { text: "I close my eyes and all I see is you", time: 124},
  { text: "And the small things you do", time: 130 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);