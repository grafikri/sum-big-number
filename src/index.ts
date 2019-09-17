const sum = function(...numbers: string[]): string {
  if (numbers.length < 2) {
    throw "Minimum of 2 numbers is required"
  }

  let arrStrHugeNumbers = numbers

  while (arrStrHugeNumbers.length != 1) {
    arrStrHugeNumbers.push(
      calculateTotal(arrStrHugeNumbers.pop()!, arrStrHugeNumbers.pop()!)
    )
  }

  return arrStrHugeNumbers[0]
}

function splitNumbers(first: string, second: string) {
  return [first.split(""), second.split("")]
}

function order(arr: string[][]) {
  return arr[0].length > arr[1].length ? [arr[0], arr[1]] : [arr[1], arr[0]]
}

function calculateTotal(first: string, second: string) {
  let arr = splitNumbers(first, second)

  let arrOrder = order(arr)

  let max = arrOrder[0]
  let min = arrOrder[1]

  let next = true
  let decade = false
  let numbers = []

  while (next) {
    let maxSingleNumber = max.pop()
    let minSingleNumber = min.pop()

    if (
      maxSingleNumber == undefined &&
      minSingleNumber == undefined &&
      decade == false
    ) {
      break
    }

    const addableMaxSingleNumber =
      maxSingleNumber == undefined ? 0 : parseInt(maxSingleNumber)
    const addableMinSingleNumber =
      minSingleNumber == undefined ? 0 : parseInt(minSingleNumber)

    let total = addableMaxSingleNumber + addableMinSingleNumber

    if (decade) {
      decade = false
      total += 1
    }

    let lastSingleNumber = "0"
    if (total > 9) {
      decade = true
      lastSingleNumber = total.toString().slice(-1)
    } else {
      lastSingleNumber = total.toString()
    }

    numbers.push(lastSingleNumber)
  }

  numbers.reverse()
  let finalNumber = numbers.join("")

  return finalNumber
}

export default sum

// to support commonjs default export
module.exports = sum
module.exports.default = sum
