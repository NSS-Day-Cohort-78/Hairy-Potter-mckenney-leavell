// Imports go first

// const {makePottery} = require("./PotteryWheel.js")
// const {firePottery} = require("./Kiln.js")
// const {toSellOrNotToSell, usePottery} = require("./PotteryCatalog.js")
// const { PotteryList } = require("./PotteryList.js")

import { makePottery } from './PotteryWheel.js'
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

//invoke makePottery() and provide values as arguments to necessary parameters
//store object returned into variable, then use console.log() to see object
//create 5 pieces of pottery
// const pottery = makePottery("bowl", 5, 4)

// console.log(pottery)

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 4)

let smallBowl = makePottery("Small bowl", 2, 4.5)

let bigBowl = makePottery("Big bowl", 6, 9)

let vase = makePottery("Vase", 6, 10)

let plate = makePottery("Plate", 2, 1)

console.log(mug, smallBowl, bigBowl, vase, plate)


// Fire each piece of pottery in the kiln

const firedMug = firePottery(mug, 2200)

const firedSmallBowl = firePottery(smallBowl, 2200)

const firedBigBowl = firePottery(bigBowl, 2500)

const firedVase = firePottery(vase, 2200)

const firedPlate = firePottery(plate, 2250)

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

const potteryList = PotteryList(usablePottery)
// const potteryContainer = document.getElementById("potteryList")

const potteryContainer = document.getElementsByClassName("potteryList")[0];

const renderHTMLToDom = (htmlToRender, whereToRender) => {
    whereToRender.innerHTML = htmlToRender
}

renderHTMLToDom(potteryList, potteryContainer)