const dogs = [];
for (let i = 0; i < 6; i++) {
    const dogName = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(dogName);
}

dogs.sort().reverse();
let html = '<ul>';
for (const dog of dogs) {
  html += `<li>${dog}</li>`;
}
html += '</ul>';

document.querySelector("#target").innerHTML += html;