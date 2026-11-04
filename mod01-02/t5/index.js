
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
        document.write("<p>" + year + " is a leapyear.</p>");
      } else {
        document.write("<p>" + year + " is not a leapyear.</p>");
      }

