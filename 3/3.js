let bildeLag = document.getElementById("bildeLag");
let bildeTekstLag = document.getElementById("bildeTekstLag");
let rad = document.getElementById("rad");
let lydRiktig = document.getElementById("lydRiktig");
let lydFeil = document.getElementById("lydFeil");
let lydTilfeldig = document.getElementById("lydTilfeldig");
let infoLag = document.getElementById("infoLag");
let highscoreSystem = document.getElementById("highscoreSystem");

let bilde = [
  "fagott.jpg",
  "floyte.gif",
  "klarinett.jpg",
  "obo.jpg",
  "valthorn.jpg",
];
let tekst = ["FAGOTT", "FLØYTE", "KLARINETT", "OBO", "VALTHORN"];
let instrumentlyd = [
  "fagott.mp3",
  "floyte.mp3",
  "klarinett.mp3",
  "obo.mp3",
  "valthorn.mp3",
];
let klikkbar = [0, 0, 0, 0, 0];

let valgtBilde = [];
let valgtTekst = [];
let valgtInstrumentlyd = [];

let highscore = 0;
let tilfeldigLydIndeks;
let gjettet = true;
let spiltLyd = false;
let forsteGang = true;
let antRiktig = 0;
let antFeil = 0;
let antallForsok = 0;
let sjekkForsok = 100;

opprettBilder();

function opprettBilder() {
  bildeLag.innerHTML = "";
  rad.innerHTML = "";
  highscoreSystem.innerHTML = "Best score :  " + highscore;
  for (let i = 0; i < bilde.length; i++) {
    bildeLag.innerHTML +=
      '<img onclick="sjekkValg(' + i + ')" src="' + bilde[i] + '">';
    forsteGang = false;
  }

  for (let i = 0; i < tekst.length; i++) {
    rad.innerHTML += "<td>" + tekst[i] + "</td>";
  }
  infoLag.innerHTML = "Antall forsøk: " + antallForsok;
}

btnLyd.onclick = function () {
  spiltLyd = true;
  if (gjettet) {
    tilfeldigLydIndeks = Math.floor(Math.random() * instrumentlyd.length);
    forrigeLyd = tilfeldigLydIndeks;
    gjettet = false;
  } else {
    tilfeldigLydIndeks = forrigeLyd;
  }

  lydTilfeldig.src = instrumentlyd[tilfeldigLydIndeks];
  lydTilfeldig.play();
};

function sjekkValg(valgtBildeIndeks) {
  gjettet = true;

  if (spiltLyd) {
    antallForsok++;
    infoLag.innerHTML = "Antall forsøk: " + antallForsok;

    if (valgtBildeIndeks == tilfeldigLydIndeks) {
      antRiktig++;
      valgtBilde.push(bilde[valgtBildeIndeks]);
      valgtTekst.push(tekst[valgtBildeIndeks]);
      valgtInstrumentlyd.push(instrumentlyd[valgtBildeIndeks]);

      klikkbar[valgtBildeIndeks] = 1;

      bilde.splice(valgtBildeIndeks, 1);
      instrumentlyd.splice(valgtBildeIndeks, 1);
      tekst.splice(valgtBildeIndeks, 1);
      lydRiktig.play();

      spiltLyd = false;
      opprettBilder();
    } else {
      antFeil++;
      lydFeil.play();
    }
  }

  if (bilde.length == 0) {
    if (antFeil == 0) {
      infoLag.innerHTML += "<br>Flawless Victory!";
    } else {
      infoLag.innerHTML +=
        "<br>Du feilet " + antFeil + " ganger. Bedre lykke neste gang!";
    }

    if (antallForsok == sjekkForsok) {
      infoLag.innerHTML += "<p>Du slo nesten highscoren!</p>";
    } else if (antallForsok < sjekkForsok) {
      infoLag.innerHTML += "<p>Gratulerer! Du slo den gamle highscoren!</p>";
      highscore = 100 - antallForsok;
      sjekkForsok = antallForsok;
    }

    gjettet = true;
    spiltLyd = false;
    forsteGang = true;
    antRiktig = 0;
    antFeil = 0;
    antallForsok = 0;

    bilde = valgtBilde;
    tekst = valgtTekst;
    instrumentlyd = valgtInstrumentlyd;

    valgtBilde = [];
    valgtTekst = [];
    valgtInstrumentlyd = [];

    highscoreSystem.innerHTML = "HIGHSCORE: " + highscore;
    infoLag.innerHTML +=
      '<p><button onclick="opprettBilder()">Prøv på nytt</button></p>';
  }
}
