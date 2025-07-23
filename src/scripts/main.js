// Imports go first

const {makePottery} = require("./PotteryWheel.js")
const {firePottery} = require("./Kiln.js")
const {toSellOrNotToSell, usePottery} = require("./PotteryCatalog.js")


//invoke makePottery() and provide values as arguments to necessary parameters
//store object returned into variable, then use console.log() to see object
//create 5 pieces of pottery
// const pottery = makePottery("bowl", 5, 4)

// console.log(pottery)

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 4)

let smallBowl = makePottery("small bowl", 2, 4.5)

let bigBowl = makePottery("big bowl", 6, 9)

let vase = makePottery("vase", 6, 10)

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
//use all objects as argument for usePottery
//use usePottery array as argument for toSellOrNotToSell

// usePottery.push(firedMug + firedSmallBowl + firedBigBowl + firedVase + firedPlate)

const sellMug = toSellOrNotToSell(firedMug)

const sellSmallBowl = toSellOrNotToSell(firedSmallBowl)

const sellBigBowl = toSellOrNotToSell(firedBigBowl)

const sellVase = toSellOrNotToSell(firedVase)

const sellPlate = toSellOrNotToSell(firedPlate)

console.log(sellMug, sellSmallBowl, sellBigBowl, sellVase, sellPlate)

const usablePottery = usePottery()

console.log(usablePottery)

// Invoke the component function that renders the HTML list

