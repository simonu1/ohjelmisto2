const numbers = [];

while (true) {
    const num = Number(prompt("enter number (0 to stop):"));
    if (num === 0 ) {
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => b - a);

for (const num of numbers) {
    console.log(num);
}