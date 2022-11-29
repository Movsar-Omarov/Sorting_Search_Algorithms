const hacks = require("./hacks/hacks.js")

let list = hacks.Elements(10000)

function MergeSort(unsortedList) {
    // console.log(unsortedList)
    if (unsortedList && unsortedList.length <= 1) return unsortedList // limiter

    const middle = Math.floor(unsortedList.length/2),
    leftHalf = unsortedList.slice(0, middle),
    rightHalf = unsortedList.slice(middle)
    
    return Merge(MergeSort(leftHalf), MergeSort(rightHalf)) // merges if all of elements separated from one another 
}

function Merge(leftHalf, rightHalf) {
    let mergedList = []
   
    while (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] < rightHalf[0]) mergedList.push(leftHalf.shift())
        else if (rightHalf[0] < leftHalf[0]) mergedList.push(rightHalf.shift())
        else {
            mergedList.push(leftHalf.shift())
            mergedList.push(rightHalf.shift())
        }
    }
    
    return mergedList.concat(leftHalf).concat(rightHalf)
}

console.log(list)
list = MergeSort(list)
console.log(list)