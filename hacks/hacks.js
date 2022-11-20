
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

Max = (list) => { // this function doesn't involve rational numbers and negatives to create list for counting sort
    let max = list[0]

    for (const element of list) {
        if (element > max) max = element
    }

    return max
}

function PutRest(mergedList, list, currentIndex = 0) {
    for (let index = currentIndex; index < list.length; index++) {
        mergedList.push(list[index])
    }
}

module.exports = {
    Swap: Swap,
    Elements: Elements,
    Max: Max,
    PutRest: PutRest
}