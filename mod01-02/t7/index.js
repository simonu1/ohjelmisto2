
        const diceamount = parseInt(prompt("enter the amount of dices (more than 0):"))

        let sum = 0;

        if (diceamount > 0) { 
            for (let i = 0; i < diceamount; i++) {
                const heitto = Math.floor(Math.random() * 6) +1;
                sum = sum + heitto;
            }
            document.querySelector("#target").innerHTML = "you threw " + diceamount + "amount of dices. total sum of the numbers you threw " + sum + "";
            
        } else {
            document.querySelector("#target").innerHTML = "number of dices is invalid</p>"        }
