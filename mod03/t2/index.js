const count = Number(prompt('Enter the amount of participants:'));
const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}:`);
  participants.push(name);
}

participants.sort();

let html = '<ol>';
for (const name of participants) {
  html += `<li>${name}</li>`;
}
html += '</ol>';

document.querySelector("#target").innerHTML += html;