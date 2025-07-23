//firePottery acts as kiln
//uses an object that was created in makePottery()
//specifies a firing temp for the kiln
//must add new property of "fired" with value of "true" to the object
//adds property "cracked" to object--if temp is above 2200, cracked = true. Else "cracked" = false
//after new properties are added, return augmented object

export const firePottery = (potteryObject, temperature) => {

    if (temperature > 2200) {
        potteryObject.firingTemperature = temperature
        potteryObject.cracked = true
        return potteryObject
    }
    
    else {

    potteryObject.firingTemperature = temperature    
    potteryObject.cracked = false;
    return potteryObject

    }

}

