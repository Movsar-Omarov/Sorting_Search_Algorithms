const hacks = require("./hacks/hacks.js")

let unsortedList = [3, 1, 3, 4, 2, 22, 33, 4, 5, 6, 10],
comparisions = 0

function InsertionSort(list) {
    for (let index = 0; index < list.length; index++) {
        let previousIndex = index,
        currentIndex = index+1, 
        key = list[currentIndex]

        if (!(key < list[previousIndex] && currentIndex >= 0)) comparisions++
        
        while (key < list[previousIndex] && currentIndex >= 0) {
            list[currentIndex] = list[previousIndex]
            list[previousIndex] = key

            currentIndex-- 
            previousIndex-- 

            comparisions++
        }

    }
}

InsertionSort(unsortedList)

console.log(unsortedList, comparisions)

module.exports = {
    InsertionSort: InsertionSort
}
