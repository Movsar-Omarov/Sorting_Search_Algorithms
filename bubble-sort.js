const hacks = require("./hacks/hacks")

let unsortedList = hacks.Elements(10000000),
comparisions = 0,
swaps = 0

function BubbleSort(list) {
    for (const phase of list) {
        for (let index = 1; index < list.length; index++) {
            const previousIndex = index - 1,
            previousElement = list[index - 1]
    
            if (previousElement > list[index]) {
                hacks.Swap(list, previousIndex, index)
                swaps++
            }
            comparisions++
        }
    }
   
}

BubbleSort(unsortedList)

console.log(unsortedList, `comparisions ${comparisions} and swaps ${swaps}`)
console.log(2**3)