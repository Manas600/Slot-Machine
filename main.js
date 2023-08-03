
const prompt = require("prompt-sync")()


const deposit = () => {

    while (true){

        const dp_amt = prompt("Enter a deposit amount: ")
        const numdp_amt = parseFloat(dp_amt)
    
        if (isNaN(numdp_amt) || numdp_amt <= 0){
            console.log("Invalid deposit amount, try again")
        }else {
            return numdp_amt 
        }

    }
   
     
}

const getNoOfLines = () => {
    while (true){

        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const NoOfLines = parseFloat(lines)
    
        if (isNaN(NoOfLines) || NoOfLines <= 0 || NoOfLines > 3){
            console.log("Invalid number of lines")
        }else {
            return NoOfLines
        }

    }
}

const getBalance = (balance, lines) => {
    while (true){

        const bet = prompt("Enter the value to bet per line: ")
        const numBet = parseFloat(bet)
    
        if (isNaN(numBet) || numBet <= 0 || numBet > balance / lines){
            console.log("Invalid bet")
        }else {
            return numBet
        }

    }
}

let balance =  deposit()
const NoOfLines = getNoOfLines()
const bet = getBalance(balance, NoOfLines)

 
