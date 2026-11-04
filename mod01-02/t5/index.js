
      const year = parseInt(prompt("enter a year:"));

      let isLeapyear = false;

      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            isLeapyear = true;
          } else {
            isLeapyear = false;
          }
        } else {
          isLeapyear = true;
        }
      } else {
        isLeapyear = false;
      }
      //result display
      if (isLeapyear) {
      document.querySelector("#target").innerHTML = year + " is a leapyear.";
      } else {
        document.querySelector("#target").innerHTML = year + " is not a leapyear.";
      }

