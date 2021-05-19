let velg = document.getElementById("velg");
let inpVoksen = document.getElementById("inpVoksen");
let inpBarn = document.getElementById("inpBarn");
let btnPris = document.getElementById("btnPris");

let arrangement = [
  "Trondheim kammermusikkfestival - 1. juni",
  " Spill opp! - 4. juni",
  "Onsdagskonsert - 6. juni",
  "Juiogat: Joik for folk - 9. juni",
];
for (let i = 0; i < arrangement.length; i++) {
  velg.innerHTML += "<option>" + arrangement[i] + "</option>";
}

btnPris.onclick = function () {
  let indeks = velg.selectedIndex;
  let antVoksen = Number(inpVoksen.value);
  let antBarn = Number(inpBarn.value);

  let prosent = 0;
  let melding = ".";
  let antBilletter = antVoksen + antBarn;
  let sumPris = antVoksen * 100 + antBarn * 50;

  if (antVoksen > 0 || antBarn > 0) {
    ut.innerHTML =
      "Du har bestillt " +
      antBilletter +
      " billetter til " +
      arrangement[indeks - 1] +
      ".<br>";
    if (antVoksen > 0 && antBarn > 0) {
      ut.innerHTML += antVoksen + " voksne og " + antBarn + " barn.<br>";
    }
    if (antBilletter >= 5) {
      sumPris = sumPris * 0.8;
      melding = ", inklusiv grupperabatt på 20 prosent. <br>";
    }
    ut.innerHTML += "Total kr " + sumPris + melding;
  } else {
    ut.innerHTML = "Velg arrangement/billetter.";
  }
};
