// Fishing Boat - This is the source of the fish. The boat catches the fish and makes the fresh catch av
const { fishArray } = require('./data.js')

const boatInventory = () => {
    // Don't need to pass fishArray as an argument to this function, can access directly after importing
    const fishObjects = []

    for (fish of fishArray) {
        const fishObject = {
            species: fish.species,
            weight: fish.weight,
            price: fish.price,
            amount: fish.amount
        }
        fishObjects.push(fishObject)
    }
    
    return fishObjects
}

module.exports = {boatInventory}