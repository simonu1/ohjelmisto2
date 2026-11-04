
      const num1 = parseInt(prompt("Enter the first number:"));
      const num2 = parseInt(prompt("Enter the second number:"));
      const num3 = parseInt(prompt("Enter the third number:"));

      const sum = num1 + num2 + num3;
      const product = num1 * num2 * num3;
      const average = sum / 3;

      //results
      document.querySelector("#target").innerHTML = "<p>sum " + sum + "</p>";
document.querySelector("#target").innerHTML += "<p>product " + product + "</p>";
document.querySelector("#target").innerHTML += "<p>Average: " + average + "</p>";

      