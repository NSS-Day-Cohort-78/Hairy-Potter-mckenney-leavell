
//create and export function called makePottery()
//must accept values: shape of piece, weight, height

let id = 0

export const makePottery = (shape, weight, height) => {
//return object with properties: `shape`, `weight`, `height`, id (increment value each time function is invoked)
        id++
        return {shape, weight, height, id}

}

