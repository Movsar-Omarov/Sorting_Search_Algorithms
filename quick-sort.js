const hacks = require("./hacks/hacks.js")

let list = hacks.Elements(100000)

function GetValues(unsortedList, higherIndex, lowerIndex, pivot) {
    while (higherIndex >= 0 && unsortedList[higherIndex] > unsortedList[pivot]) higherIndex--
    while (lowerIndex <= pivot && unsortedList[lowerIndex] < unsortedList[pivot]) lowerIndex++

    if (lowerIndex > higherIndex) return {"lowerIndex": lowerIndex, "higherIndex": higherIndex}

    hacks.Swap(unsortedList, higherIndex, lowerIndex)

    lowerIndex++
    higherIndex--

    return {
        "lowerIndex": lowerIndex, 
        "higherIndex": higherIndex
    }
}

function QuickSort(unsortedList) {
    if (unsortedList.length <= 1) return unsortedList
    else if (unsortedList.length <= 2) {
        if (unsortedList[0] > unsortedList[unsortedList.length-1]) hacks.Swap(unsortedList, 0, unsortedList.length-1)
        return unsortedList
    }
    
    let pivot = Math.floor(unsortedList.length/2),
    lowerIndex = 0,
    higherIndex = unsortedList.length-2

    hacks.Swap(unsortedList, pivot, unsortedList.length-1)

    pivot = unsortedList.length-1

    while (lowerIndex < higherIndex) {
        const container = GetValues(unsortedList, higherIndex, lowerIndex, pivot) // contains higher and lower index

        lowerIndex = container["lowerIndex"]
        higherIndex = container["higherIndex"]
    }
    
    hacks.Swap(unsortedList, pivot, lowerIndex)

    let listAfterDaC = DaC(unsortedList, lowerIndex)
    // console.log(listAfterDaC)
    return QuickSort(listAfterDaC.leftSide).concat(listAfterDaC.pivot, QuickSort(listAfterDaC.rightSide))
}

function DaC(unsortedList, pivot) {
    const leftSide = unsortedList.slice(0, pivot),
    rightSide = unsortedList.slice(pivot+1)
    // console.log(leftSide, rightSide)
    return {"leftSide": leftSide, "pivot": unsortedList[pivot], "rightSide": rightSide}
}

console.log(list)
list = QuickSort(list)
console.log(list)