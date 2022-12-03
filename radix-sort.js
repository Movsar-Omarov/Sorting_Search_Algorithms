const hacks = require("./hacks/hacks.js"),
CountingSort = require("./counting-sort.js")

let list = hacks.Elements(110)

const digits = (unsortedList, index) => {
    return unsortedList.map((number) => {
        return number.toString().slice(0, index+1)
    })
}

function RadixSort(unsortedList) {
    const max = hacks.Max(unsortedList),
    maxDigits = max.toString().length

    let sortedList = []

    for (let iteration = 0; iteration < maxDigits; iteration++) {
        // create sorted list of digits
        
        let currentDigits = digits(unsortedList, iteration)
        
        currentDigits = CountingSort.CountingSort(currentDigits)
       
        // rearrange unsorted list

        for (let numberIndex = 0; numberIndex < unsortedList.length; numberIndex++) {
            // search digit in list of digits, if digits of list of digits and digits of value are matching

            let digitIndex = 0
            const digitOfNumber = unsortedList[numberIndex].toString().slice(0, iteration+1)

            // search if index at which you insert a number

            while (digitOfNumber != currentDigits[digitIndex]) {
                digitIndex++
            }

            // insert number at index found, but after that delete index of list of digits

            sortedList[digitIndex] = unsortedList[numberIndex]
            currentDigits[digitIndex] = Infinity
        }
    }

    return sortedList
}

console.log(list)
list = RadixSort(list)
console.log(list, hacks.isSorted(list))
