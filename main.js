
const prompt = require("prompt-sync")()


const ROWS = 3
const COL = 3

const NUM_SYMBOLS = {

    "💀":2,
    "🥁":4,
    "♿":6,
    "😂":8
    
}
const VAL_SYMBOLS = {

    "💀":4,
    "🥁":3,
    "♿":2,
    "😂":1

}


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

const spin = () => {
    const symbols = []
    for ( const[symbol,count] of Object.entries(NUM_SYMBOLS)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol)
        }
    }

    const reels = []
    for(let i = 0; i < COL; i++){
        reels.push([])
        const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const rand_index = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[rand_index]

            reels[i].push(selectedSymbol)
            reelSymbols.splice(rand_index, 1)

        }
    }
    return reels
}

const transpose = (reels) => {
    const rows = []

    for(let i = 0; i < ROWS; i++){
        rows.push([])
        for(let j = 0; j < COL; j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const showOutput = (rows) => {

    for(const row of rows){
        let rowString = "| "
        for (const [i, symbol] of row.entries)
        rowString += symbol + " | "
    }
    console.log(rowString)
}


let balance =  deposit()
const NoOfLines = getNoOfLines()
const bet = getBalance(balance, NoOfLines)
const reels = spin()
const rows = transpose(reels)
showOutput
 
