
      const wantsCalc = confirm("do you want to calculate squareroot?");
      if (wantsCalc) {
        const number = parseFloat(prompt("enter a number"));

        if (number < 0) {
          document.querySelector("#target").innerHTML = "The square root of a negative number is not defined.";
        } else {
          const squareroot = Math.sqrt(number);
          document.querySelector("#target").innerHTML = "number " + number + " squareroot is " + squareroot + "";
          
        }
      } else {
        document.querySelector("#target").innerHTML =  "squareroot in not calculated.";
      }

