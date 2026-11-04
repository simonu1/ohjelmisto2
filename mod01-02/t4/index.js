      const studentName = prompt("enter your name:");

      const houseNumber = Math.floor(Math.random() * 4) + 1;

      let house = "";

      switch (houseNumber) {
        case 1:
          house = "gryffindor";
          break;
        case 2:
          house = "slytherin";
          break;
        case 3:
          house = "hufflepuff";
          break;
        case 4:
          house = "ravenclaw";
          break;
      }

      document.querySelector("#target").innerHTML = studentName + ", you are " + house + ".";

