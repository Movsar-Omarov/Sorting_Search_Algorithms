const hacks = require("./hacks/hacks.js"),
QuickSort = require("./quick-sort.js"),
MergeSort = require("./merge-sort-2_0.js"),
CountingSort = require("./counting-sort.js")

let list = hacks.Elements(500)

const emptyList = (unsortedList) => {
    let max = hacks.Max(unsortedList),
    emptyList = []

    // increase max until it is divided by 5

    while (max % 5 != 0) {
        max++
    }

    // create n lists and add to emptyList

    for (let list = 0; list < max/5; list++) {
        emptyList.push([])
    }

    return emptyList
}

function Scatter(unsortedList, sortingAlgorithm, withReturn) {
    let separatedList = emptyList(unsortedList)
    
    // separate all of values into lists by amount condition

    for (let index = 0; index < unsortedList.length; index++) {
        const condition = Math.ceil(unsortedList[index]/5)
        
        if (unsortedList[index] <= 0) separatedList[0].push(unsortedList[index])
        else if (unsortedList[index] <= 5*condition) separatedList[condition-1].push(unsortedList[index])
    }
    
    // sorts separated set of values by chosen sorting algorithm

    for (let set = 0; set < separatedList.length; set++) {
        if (withReturn) separatedList[set] = sortingAlgorithm(separatedList[set])
        else sortingAlgorithm(separatedList[set])
    }
   
    return separatedList
}

function BucketSort(unsortedList, sortingAlgorithm, withReturn) {
    const separatedLists = Scatter(unsortedList, sortingAlgorithm, withReturn)
    let sortedList = []

    // put all of sorted lists together

    for (let list = 0; list < separatedLists.length; list++) {
        sortedList = sortedList.concat(separatedLists[list])
    }
    
    return sortedList
}

console.log(list)
list = BucketSort(list, MergeSort.MergeSort, true)
console.log(list, hacks.isSorted(list))