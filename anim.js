// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ojos expresivos", time: 21 },
  { text: "Carita sonriente", time: 23 },
  { text: "Mirada agradable", time: 27 },
  { text: "Por eso aquí tienes", time: 32 },
  { text: "Lo que me pediste", time: 33 },
  { text: "Que en ti me inspirara", time: 38 },
  { text: "Una canción linda", time: 42 },
  { text: "Que llegara al alma", time: 47 },
  { text: "Por eso me tienes", time: 50 },
  { text: "De ti enamorado", time: 53 },
  { text: "Yo componía alegre", time: 56 },
  { text: "Pero, ahora, romántico", time: 60 },
  { text: "¿Y quién no se inspira al verte linda", time: 62 },
  { text: "Con esos huequitos en tus mejillas", time: 65 },
  { text: "Con esos deseos que sean míos", time: 70 },
  { text: "Y que se acompañen de caricias?", time: 75 },
  { text: "¿Y quién no se inspira con tus manos", time: 78 },
  { text: "Que añoro tener entre mis brazos?", time: 81 },
  { text: "¿A quién no le gusta tu sonrisa de niña bonita", time: 85 },
  { text: "De mujer bonita?", time: 88 },
  { text: "me desconcentro pero ahi va la vaina, cierra o termina de escuchar la canción como gustes", time: 95 },
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