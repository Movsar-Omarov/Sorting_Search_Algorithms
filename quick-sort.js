const { Swap } = require("./hacks/hacks.js")
const hacks = require("./hacks/hacks.js")

let unsortedList = hacks.Elements(10)

function DivideAndConquer(list, divideSpot) { // don't forget to input array in the corner brackets
    for (let index = 0; index < list.length; index++) {
        if (list[index].length > 2) {
            const sublist = list[index],
            firstHalf = sublist.slice(0, divideSpot),
            secondHalf = sublist.slice(divideSpot, sublist.length),
            divider = sublist[divideSpot]

            list.splice(index, 1, firstHalf, divider, secondHalf)
        }
    }
}

function MovePointers(list, higherIndex, lowerIndex, pivot) {
    
    while (list[lowerIndex] >= list[pivot] && higherIndex > lowerIndex) lowerIndex++
    
    while (list[higherIndex] <= list[pivot] && lowerIndex < higherIndex) higherIndex--

    if(higherIndex > lowerIndex) {
        hacks.Swap(list, higherIndex, lowerIndex)

        higherIndex--
        lowerIndex++
    }

    return [lowerIndex, higherIndex]
}

const areAllSublistsSorted = (lists) => {

    const isListSorted = (list) => {
        list.every((element, index) => {
            if (index >= 1) return element > list[index-1]
        })
    }

    return lists.every((list) => {
        return isListSorted(list)
    })
}


function QuickSort(list) {
    list = [list]
    
    for (let array of list) {
        let pivot = array[array.length-1],
        lowerIndex = 0,
        higherIndex = pivot-1

        while (higherIndex > lowerIndex) {
            const pointerIndexes = MovePointers(array, higherIndex, lowerIndex, pivot)

            higherIndex = pointerIndexes[1]
            lowerIndex = pointerIndexes[0]
        }

        if (array[pivot] < array[lowerIndex]) hacks.Swap(array, lowerIndex, pivot)
        console.log(array)
        DivideAndConquer(list, lowerIndex)
    }
    console.log(areAllSublistsSorted(list))
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
