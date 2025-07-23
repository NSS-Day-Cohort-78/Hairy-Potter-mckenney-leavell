let potteryToSell = [];

//toSellOrNotToSell will determine if a piece should be sold
//must accept pottery potteryObject as input
export const toSellOrNotToSell = (potteryObject) => {
//if piece weight is >= 6, function must add price property with value of 40
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
        }
    //if piece weight is < 6, function must add price property with value of 20
        else if (potteryObject.weight < 6) {
            potteryObject.price = 20
        }
    //if cracked, no price added
        if (potteryObject.cracked === true) {
            delete potteryObject.price
        }
    //if not cracked, add potteryObject to module-level array of items to be sold
        else if (potteryObject.cracked === false) {
            potteryToSell.push(potteryObject)
        }
    
        //return augmented potteryObject
    return potteryObject

}
//define and export function named usePottery to return copy of the array of items to be sold. Use global js function to create deep copy
export const usePottery = () => {
    return structuredClone(potteryToSell)
}

//invoke toSellOrNotToSell() in main.js for the 5 pottery items to check work



//PUSH CODE TO GITHUB