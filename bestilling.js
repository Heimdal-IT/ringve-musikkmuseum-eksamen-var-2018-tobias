//Variabler
let velg = document.getElementById("velg");
let antallVoksen = document.getElementById("antallVoksen");
let antallBarn = document.getElementById("antallBarn");
let btnPris = document.getElementById("btnPris");

//for valg av arrangementer
let arrangement = [
  "Trondheim kammermusikkfestival - 1. juni",
  " Spill opp! - 4. juni",
  "Onsdagskonsert - 6. juni",
  "Juiogat: Joik for folk - 9. juni",
];
for (let i = 0; i < arrangement.length; i++) {
  velg.innerHTML += "<option>" + arrangement[i] + "</option>";
}

//for bestilling
btnPris.onclick = function () {
  let indeks = velg.selectedIndex;
  let antVoksen = Number(antallVoksen.value);
  let antBarn = Number(antallBarn.value);

  //for rabatt når det er bestilt fem eller flere billetter
  let prosent = 0;
  let melding = ".";
  let antallBilletter = antVoksen + antBarn;
  let sumPris = antVoksen * 100 + antBarn * 50;

  //if setning som sjekker hvor mange voksne og barn det blir bestilt billetter for
  if (antVoksen > 0 || antBarn > 0) {
    ut.innerHTML =
      "Du har bestillt " +
      antallBilletter +
      " billetter til " +
      arrangement[indeks - 1] +
      ".<br>";
    if (antVoksen > 0 && antBarn > 0) {
      ut.innerHTML += antVoksen + " voksne og " + antBarn + " barn.<br>";
    }
    //her kjøres rabatt, if setning for om det blir bestilt fem eller flere billetter
    if (antallBilletter >= 5) {
      sumPris = sumPris * 0.8;
      melding = ", inklusiv grupperabatt på 20 prosent. <br>";
    }
    //Printer ut bestilling
    ut.innerHTML += "Total kr " + sumPris + melding;
  } else {
    ut.innerHTML = "Velg arrangement/billetter.";
  }
};
