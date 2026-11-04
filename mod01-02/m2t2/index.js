const noppienmaara = parseInt(prompt("anna noppien määrä:"));
const haluttusum = parseInt(prompt("anna haluttu silmölukujen summa:"));

const toistot = 10000;
let osumat = 0;

for (let i = 0; i < toistot; i++) {
    let tamankierroksensum = 0;

    for (let n = 0; n < noppienmaara; n++) {
        const heitto = Math.floor(Math.random() * 6) + 1;
        tamankierroksensum += heitto;
    }
    if (tamankierroksensum === haluttusum) {
        osumat++;
    }
}
const todnak = (osumat / toistot) * 100;

document.querySelector("#target").innerHTML = " mahdollisuus saada summa " + haluttusum + " " + noppienmaara + " nopan määrällä on " + todnak.toFixed(2) + "%";