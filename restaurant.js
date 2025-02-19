// This module must import and invoke the function that is exported by the fish monger module. 
// This module should also define a function that build an HTML version of their daily menu. 
// The function should return the generated HTML string. 
// The function must be named fishMenu.

const {mongerInventory} = require('./fishMonger.js')

const fishMenu = (dailyPriceLimit) => {

    const menu = mongerInventory(dailyPriceLimit)

    let html = `<h1>Menu</h1>

<article class="menu">`

    for (const item of menu) {
        html += `
        <h2>${item.species}</h2>
        <section class="menu__item">${item.species} Dish #1</section>
        <section class="menu__item">${item.species} Dish #2</section>
        <section class="menu__item">${item.species} Dish #3</section>
        `        
    }
    html += `</article>`

    return html

    // const newMethod = menu.map(item => '<section> class="menu__item">' + item.species + ' Dish' + '</section>')
    // console.log(newMethod)

    // Cool way of doing the generative html, but a bit trickier imo
    // Prefer original method, easier to visualize the HTML
    // Can see this being much more concise, though. Would be helpful on capstone front-end
}

module.exports = {fishMenu}


