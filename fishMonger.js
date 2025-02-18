// Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. 
// If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
// The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.

const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = (dailyPriceLimit) => {
    const inventory = boatInventory()

    const finalArray = []
    for (const item of inventory) {
        if (mongerConstraints(item) && chefConstraints(item, dailyPriceLimit)) {
                item.amount = 5
                // The chef buying 50% of the inventory at the right price point only affects the chef constraints (?)
                // If the monger will have 10 of each fish available after monger constraints, the chef will always buy 5 fish
                finalArray.push(item)
        }
    }

    return finalArray
}

const mongerConstraints = (item) => {
    return item.amount >= 10 && item.price <= 7.50
}

const chefConstraints = (item, dailyPriceLimit) => {
    return item.price <= dailyPriceLimit
}

module.exports = {mongerInventory}