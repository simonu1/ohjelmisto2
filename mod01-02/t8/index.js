const alkuVuosi = parseInt(prompt("anna alkuvuosi: "));
const loppuVuosi = parseInt(prompt("anna loppuvuosi: "));

document.querySelector("#target").innerHTML = "<ul>";
for (let vuosi = alkuVuosi; vuosi <= loppuVuosi; vuosi++) {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
        document.querySelector("#target").innerHTML +="<li>" + vuosi + "</li>";
    }
}
document.querySelector("#target").innerHTML += "</ul>";
