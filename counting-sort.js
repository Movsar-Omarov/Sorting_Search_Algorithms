const hacks = require("./hacks/hacks.js")

let unsortedList = hacks.Elements(10),
operations = 0

const CountList = (list) => {
    const max = hacks.Max(list)
    let countList = []

    for (let zero = 0; zero <= max; zero++) {
        countList.push(0)
    }

    return countList
}

function IncreaseCountList(list, countList) {
   
    for (let element of list) {
        const copy = Number(element)
        countList[copy]++
    }
}

function AddCountPairs(list, countList) {
    IncreaseCountList(list, countList)

    for (let count = 1; count < countList.length; count++) {
        countList[count] += countList[count-1] 
    }
}

function DisplaceCounts(list, countList) {
    AddCountPairs(list, countList)
   
    countList[0] = 0

    for (let count = countList.length-1; count > 0; count--) {
        countList[count] = countList[count-1]
    }
}


function CountingSort(list) {
    let countList = CountList(list),
    emptyList = []

    DisplaceCounts(list, countList)
    
    for (const element of list) {
        const copy = Number(element),
        countIndex = countList[copy]
       
        emptyList[countIndex] = element
        operations++
        countList[copy]++
    }
    
    return emptyList
}

x = ["1", "20", "5", "06"]

unsortedList = CountingSort(unsortedList)

module.exports = {
    CountingSort: CountingSort
}