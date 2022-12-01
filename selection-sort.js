const hacks = require("./hacks/hacks.js")

let unsortedList = hacks.Elements(100),
comparisions = 0,
insertions = 0

const Min = (list, indexToUse) => {
    let minValue = list[indexToUse],
    minIndex = indexToUse
    
    for (let index = indexToUse; index < list.length; index++) {
        const element = list[index]
        
        if (element < minValue) {
            minValue = element
            minIndex = index
        }
        
        comparisions++
    }
    
    return {"min value": minValue, "min index": minIndex}
}

function SelectionSort(list) {
    let indexToUse = 0
    const length = list.length
    
    for (let index = 0; index < length-1; index++) {
        const min = Min(list, indexToUse),
        minIndex = min["min index"]
        
       hacks.Swap(list, indexToUse, minIndex)
        
        indexToUse++ 
        insertions++
    }
}

SelectionSort(unsortedList)
console.log(unsortedList, hacks.isSorted(unsortedList))
module.exports = {
    SelectionSort: SelectionSort
}