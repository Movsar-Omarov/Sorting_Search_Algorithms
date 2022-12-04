const hacks = require("./hacks/hacks.js")

let list = hacks.Elements(1000)

function LinearSearch(list, wantedElement) {
    for (const element of list) {
        if (element == wantedElement) return element
    }

    console.log("There isn't your wanted element.")
}

const wantedElement = LinearSearch(list, 5)

module.exports = {
    LinearSearch: LinearSearch
}