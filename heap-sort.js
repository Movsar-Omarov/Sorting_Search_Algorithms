const hacks = require("./hacks/hacks.js")

let list = hacks.Elements(1000)

const childAndParent = (tree, max) => {
    let leftChildIndex = 0,
    rightChildIndex = 0,
    parentIndex = 0

    if (tree[parentIndex] == max) return {parent: parentIndex, child: parentIndex}

    while (tree[leftChildIndex] != max && tree[rightChildIndex] != max) {
        leftChildIndex = parentIndex * 2 + 1
        rightChildIndex = parentIndex * 2 + 2
        
        if (tree[leftChildIndex] == max) return {child: leftChildIndex, parent: parentIndex}
        else if (tree[rightChildIndex] == max) return {child: rightChildIndex, parent: parentIndex} 

        parentIndex++
    }
}

function Heapify(unsortedList, end) {
    for (let index = 0; index < unsortedList.length - end; index++) {
        const container = childAndParent(unsortedList, hacks.Max(unsortedList, end)),
        childIndex = container.child,
        parentIndex = container.parent
       
        hacks.Swap(unsortedList, parentIndex, childIndex)
    }
}

function HeapSort(unsortedList) {
    let end = 0
    
    for (let index = 0; index < unsortedList.length; index++) {
        const endIndex = unsortedList.length-(1+end)
        
        Heapify(unsortedList, end)
        hacks.Swap(unsortedList, 0, endIndex)

        end++
    }
}

console.log(list)
HeapSort(list)
console.log(list, hacks.isSorted(list))