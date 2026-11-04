
      const wantsCalc = confirm("do you want to calculate squareroot?");
      if (wantsCalc) {
        const number = parseFloat(prompt("enter a number"));

        if (number < 0) {
          document.write(
            "<p>The square root of a negative number is not defined.</p>",
          );
        } else {
          const squareroot = Math.sqrt(number);
          document.write(
            "<p>number " + number + " squareroot is " + squareroot + "<p/>",
          );
        }
      } else {
        document.write("<p> squareroot in not calculated.<p/>");
      }

