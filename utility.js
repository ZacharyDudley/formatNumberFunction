const utility = (number) => {
  const whole = Math.trunc(number)
  let decimal = number - whole
  let truncDecimal = Math.trunc(decimal * 10000) / 10000

  return (whole + truncDecimal).toString()
}

// const utilityTypeCheck = (number) => {
//   if (typeof number === 'number') {
//     const whole = Math.trunc(number)
//     let decimal = number - whole
//     let truncDecimal = Math.trunc(decimal * 10000) / 10000

//     return (whole + truncDecimal).toString()
//   } else {
//     throw new Error('Argument must be number')
//   }
// }

module.exports = utility
