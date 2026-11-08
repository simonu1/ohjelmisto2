const numbers = [];

while(true) {
    const num = Number(prompt("enter number:"));
    if (numbers.includes(num)) {
        alert('number ${num} has already been given.');
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => a - b);

for (const num of numbers) {
  console.log(num);
}