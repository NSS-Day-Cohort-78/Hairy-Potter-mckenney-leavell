// Imports go first

const {makePottery} = require("./PotteryWheel.js")
const {firePottery} = require("./Kiln.js")


//invoke makePottery() and provide values as arguments to necessary parameters
//store object returned into variable, then use console.log() to see object
//create 5 pieces of pottery
// const pottery = makePottery("bowl", 5, 4)

// console.log(pottery)

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 4)

let smallBowl = makePottery("small bowl", 2, 4.5)

let bigBowl = makePottery("big bowl", 4, 6)

let vase = makePottery("vase", 3, 5)

let plate = makePottery("plate", 2, 1)

console.log(mug, smallBowl, bigBowl, vase, plate)


// Fire each piece of pottery in the kiln

firedMug = firePottery(mug, 2200)

firedSmallBowl = firePottery(smallBowl, 2200)

firedBigBowl = firePottery(bigBowl, 2500)

firedVase = firePottery(vase, 2200)

firedPlate = firePottery(plate, 2250)

console.log(firedMug, firedSmallBowl, firedBigBowl, firedVase, firedPlate)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

