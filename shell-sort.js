const hacks = require("./hacks/hacks.js")

let list = hacks.Elements(200)

function ShellSort(unsortedList) {
    let distance = Math.floor(unsortedList.length/2)

    // swaps numbers until distance is equal to zero

    while (!hacks.isSorted(unsortedList)) {
        let currentIndex = 0

        // ends if currentIndex or to compared Index is greater than list

        while (currentIndex + distance <= unsortedList.length) { // Error
            
            if (unsortedList[currentIndex] > unsortedList[currentIndex+distance]) hacks.Swap(unsortedList, currentIndex, currentIndex+distance)
            
            currentIndex++
        }

        // diminishes distance by half

        distance = Math.ceil(distance/2)
    }
}

console.log(list)
ShellSort(list)
console.log(list, hacks.isSorted(list))