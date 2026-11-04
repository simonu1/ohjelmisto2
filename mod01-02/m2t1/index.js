const luku = parseInt(prompt("anna luku:"));

let onAL = true;

if (luku < 2) {
    onAL =false;
} else {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            onAL = false;
            break;
        }
    } 
}
const element = document.getElementById("target")
if (onAL) {
    element.innerHTML="luku " + luku + " on alkuluku";
    } else {
    element.innerHTML="luku " + luku + " ei ole alkuluku";
    }