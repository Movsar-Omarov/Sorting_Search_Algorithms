const hacks = require("./hacks/hacks.js"),
sortingAlgorithms = {
    "QuickSort": require("./quick-sort.js"),
    "MergeSort": require("./merge-sort-2_0.js"),
    "HeapSort": require("./heap-sort.js")
}

let list = hacks.Elements(1000)

function BinarySearch(sortedList, wantedElement, sortingAlgorithm, givesReturn = true) {
    // it is advanced version of binary search algorithm
   
    if (!hacks.isSorted(sortedList) && givesReturn) sortedList = sortingAlgorithm(sortedList)
    else if (!hacks.isSorted(sortedList)) sortingAlgorithm(sortedList)

    let lowerFrontier = 0,
    upperFrontier = sortedList.length-1,
    middle = Math.round(upperFrontier/2),
    searchCounter = 0,
    sum = 0

    // searches until it reaches one of the ends of list or it finds a wanted element

    while (sortedList[middle] != wantedElement && searchCounter <= Math.ceil(Math.log2(sortedList.length))) {
        if (sortedList[middle] > wantedElement) {
            upperFrontier = middle
            sum = upperFrontier + lowerFrontier
            middle = Math.floor(sum/2)
        }
        else if (sortedList[middle] < wantedElement) {
            lowerFrontier = middle
            sum = upperFrontier + lowerFrontier
            middle = Math.ceil(sum/2)
        }

        searchCounter++
    }

    if (searchCounter > Math.ceil(Math.log2(sortedList.length))) {
        console.log("Sorry, there isn't your wanted number")
        return
    }
    
    return sortedList[middle]
}

const wantedElement = BinarySearch(list, 10, sortingAlgorithms.HeapSort.HeapSort, false)
console.log(wantedElement)