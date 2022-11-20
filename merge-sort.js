const hacks = require("./hacks/hacks.js")

let unsortedList = hacks.Elements(10)

function DivideAndConquer(list) { // don't forget to input array in the corner brackets
    for (let index = 0; index < list.length; index++) {
        if (list[index].length > 1) {
            const sublist = list[index],
            middle = Math.round(sublist.length/2),
            firstHalf = sublist.slice(0, middle),
            secondHalf = sublist.slice(middle, sublist.length)

            list.splice(index, 1, firstHalf, secondHalf)
        }
    }

    const isDividedToAtomic = list.every((element) => {
        return element.length == 1
    })

    if (!isDividedToAtomic) DivideAndConquer(list)
}

function PutRest(mergedList, list, currentIndex) {
    for (let index = currentIndex; index < list.length; index++) {
        mergedList.push(list[index])
    }
}

function CompareTwoElements(mergedList, list1, list2, index1, index2) {
    if (list2[index2] === list1[index1]) {
        mergedList.push(list1[index1], list2[index2])

        index1++
        index2++
    }
    else if (list1[index1] < list2[index2]) {
        mergedList.push(list1[index1])

        index1++
    }
    else {
        mergedList.push(list2[index2])
        
        index2++
    }

    return {1: index1, 2: index2}
}

function Merge(list, smallUnit1, smallUnit2, index1 = 0, index2 = 0, mergedList = []) {
    let mergedListCopy = mergedList,
    index1Copy = index1,
    index2Copy = index2
   
    if (!(smallUnit1[index1] && smallUnit2[index2])) {
        if (smallUnit1[index1]) PutRest(mergedList, smallUnit1, index1)
        else if (smallUnit2[index2]) PutRest(mergedList, smallUnit2, index2)
    }
    else {
        const container = CompareTwoElements(mergedListCopy, smallUnit1, smallUnit2, index1, index2)

        index1Copy = container["1"]
        index2Copy = container["2"]
    }

    if (mergedList.length < smallUnit1.length + smallUnit2.length) Merge(list, smallUnit1, smallUnit2, index1Copy, index2Copy, mergedList)
    else {
        list.splice(list.indexOf(smallUnit1), 2, mergedList)
    }
}

function MergeSort(list) {
    const n = list.length,
    merges = Math.ceil(Math.log2(n))

    list = [list]
    DivideAndConquer(list)

    for  (let merge = 0; merge < merges; merge++) {
        for (let array = 0; array < list.length; array++) {
            if (!list[array+1]) continue
            Merge(list, list[array], list[array+1])
            
        }
    }
    
    list = list[0]
    
    return list
}

unsortedList = MergeSort(unsortedList)
console.log(unsortedList)