
Swap = function (list, index1, index2) {
    const value1 = list[index1]

    list[index1] = list[index2]
    list[index2] = value1
}

Elements = (number) => {
    let list = []
    const randomNumber = Math.floor(Math.random()*number+3)
    for (let index = 0; index < randomNumber; index++) {
        const randomElement = Math.floor(Math.random()*number)
        list.push(randomElement)
    }
   
    return list
}

Max = (list, end = 0) => { // this function doesn't involve rational numbers and negatives to create list for counting sort
    let max = -Infinity

    for (let index = 0; index < list.length-end; index++) {
        const copy = Number(list[index])

        if (copy > max) max = list[index]
    }

    return max
}

const convertedList = (list) => {return [list]}

function NormalizeList(list, listInBrackets) {
    for (let index = 0; index < listInBrackets.length; index++) {
        list.push(listInBrackets[index])
    }

    list.shift()
}

const isSorted = (list) => {
    return list.every((element, index) => {
        if (index < list.length-1 && element <= list[index+1]) return true
        else if (index == list.length-1) return true
        return false
    })
}

module.exports = {
    Swap: Swap,
    Elements: Elements,
    Max: Max,
    convertedList: convertedList,
    NormalizeList: NormalizeList,
    isSorted: isSorted
}