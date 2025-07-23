
// //define and export PotteryList function
export const PotteryList = (potteryToSell) => {
// //must get items to be sold from the PotteryCatalog.js, and convert each object in array into an HTML representation string
    let potteryHTML = ``
    for (const potteryObject of potteryToSell) {
// //use example:
        potteryHTML += `<section class="pottery" id="${potteryObject.id}">
        <h2 class="pottery__shape">${potteryObject.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
        </div>
        <div class="pottery__price">Price is $${potteryObject.price}</div>
        </section>`
    }
//PotteryList() must then return a single string containing all of the pottery HTML representation
    return potteryHTML
}



//invoke PotteryList() in main.js module to check work. Take return value and update inner HTML of article element created. Should see non-cracked pottery list appear when starting web server.

//PUSH CODE TO GITHUB