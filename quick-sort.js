<<<<<<< HEAD
const { Swap } = require("./hacks/hacks.js")
const hacks = require("./hacks/hacks.js")

let unsortedList = [hacks.Elements(10)]

function DivideAndConquer(list, divideSpot, number) { // don't forget to input array in the corner brackets
    for (let index = 0; index < number; index++) {
        if (list[index].length > 2) {
            const sublist = list[index],
            firstHalf = sublist.slice(0, divideSpot),
            secondHalf = sublist.slice(divideSpot, sublist.length),
            divider = sublist[divideSpot]
            
            list.splice(index, 1, firstHalf, [divider], secondHalf)
            console.log(list)
        }
    }
}

function MovePointers(list, higherIndex, lowerIndex, pivot) {
    
    while (list[lowerIndex] >= list[pivot] && higherIndex > lowerIndex) {
        lowerIndex++
    }
    
    while (list[higherIndex] <= list[pivot] && lowerIndex < higherIndex){ 
        higherIndex--
    }

    if(higherIndex > lowerIndex) {
        hacks.Swap(list, higherIndex, lowerIndex)

        higherIndex--
        lowerIndex++
    }

    return [lowerIndex, higherIndex]
}

const areAllSublistsSorted = (lists) => {
   
    const isListSorted = (list) => {
        return list.every((element, index) => {
            if (list[index+1]) return element < list[index+1]
            else if (list.length == 1) return true
            else return false
        })
    }

    return lists.every((list) => {
        return isListSorted(list)
    })
}


function QuickSort(list) {
    const length = list[0].length
    
    for (let array = 0; array < length; array++) {
        let pivot = Math.round(array.length/2),
        lowerIndex = 0,
        higherIndex = array.length-2

        hacks.Swap(array, pivot, array.length-1)
        pivot = array.length-1

        while (higherIndex > lowerIndex) {
            const pointerIndexes = MovePointers(array, higherIndex, lowerIndex, pivot)

            higherIndex = pointerIndexes[1]
            lowerIndex = pointerIndexes[0]
        }

        DivideAndConquer(list, lowerIndex, number)
        hacks.Swap(array, pivot, lowerIndex)
    }
    
    /* if (!areAllSublistsSorted(list)) QuickSort(list)
    else {
        list = list.reduce((array, sublist) => {
            hacks.PutRest(array, sublist)
        }, [])

        return list
    } */
}

console.log(unsortedList)
unsortedList = QuickSort(unsortedList)
// console.log(unsortedList)



x = [[1, 2, 3], [10], [12, 20, 304]]


=======
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
const isSorted = list
console.log(list, list.sort() == isSorted)
>>>>>>> examine-branch
