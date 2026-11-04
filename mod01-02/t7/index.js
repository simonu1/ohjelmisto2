
        const diceGame = parseInt(prompt("enter the amount of dices (more than 0):"))

        let sum = 0;

        if (diceamount > 0) { 
            for (let i = 0; i < diceamount; i++) {
                const heitto = Math.floor(Math.random() * 6) +1;
                sum = sum + Throw;
            }
            document.write("<p>you threw " + diceamount + "amount of dices. total sum of the numbers you threw " + sum + "</p>");
            
        } else {
            document.write("<p>number of dices is invalid</p>")
        }
