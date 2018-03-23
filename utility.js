const utility = (number) => {
  let splitNum = number.toString().split('.')

  if (splitNum.length === 1) {
    return splitNum[0].toString()
  } else {
    let decimal = splitNum[1].slice(0, 4) || 0

    return [splitNum[0], '.', decimal].join('')
  }
}

module.exports = utility
