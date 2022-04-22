const calculate = (calcSteps) => {
  let operator
  let numsArray = []
  let answer

  for (let item of calcSteps) {
    if (!isNaN(parseInt(item))) {
      numsArray.push(parseInt(item))
    }
    else if (isOperator(item)) {
      operator = item
    }
    else if (item === null) {
      numsArray.push(0)
    }
  }

  if (numsArray.length === 2 && isOperator(operator)) {
    answer = doMath(numsArray, operator)
  }
  else {
    answer = NaN
  }

  return answer
}

const isOperator = (item) => {
  let operatorArray = ['+', '-', '*', '/']

  for (let op of operatorArray) {
    if (item === op) {
      return true
    }
  }

  return false
}

const doMath = (nums, operator) => {
  if (operator === '+') {
    return nums[0] + nums[1]
  } else if (operator === '-') {
    return nums[0] - nums[1]
  } else if (operator === '*') {
    return nums[0] * nums[1]
  } else {
    return nums[0] / nums[1]
  }
}

module.exports = calculate
