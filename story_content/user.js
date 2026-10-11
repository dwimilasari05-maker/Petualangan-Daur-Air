function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ii71DdvbEM":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var volume = player.GetVar("Volume");

// Ubah 0–100 menjadi 0–1
var volumeLevel = volume / 100;

// Cari semua audio dan video yang sedang digunakan Storyline
var mediaElements = document.querySelectorAll("audio, video");

// Atur volume
mediaElements.forEach(function(media) {
    media.volume = volumeLevel;
});
}

