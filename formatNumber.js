const formatNumber = (numberToFormat, placesAfterDecimal = 4, includeTrailingZeros = false) => {
  let splitNum = numberToFormat.toString().split('.'),
    reformattedNumber = splitNum[0].toString(),
    decimal = splitNum.length > 1 ? splitNum[1].slice(0, placesAfterDecimal) : undefined;

  if (decimal && includeTrailingZeros) {
    let zerosToAdd = placesAfterDecimal - decimal.length;
    reformattedNumber += zerosToAdd > 0 ? '.' + decimal + '0'.repeat(zerosToAdd) : '.' + decimal;
  } else if (includeTrailingZeros) {
    reformattedNumber += '.' + '0'.repeat(placesAfterDecimal);
  } else if (decimal) {
    reformattedNumber += '.' + decimal;
  }

  return reformattedNumber;
};

module.exports = formatNumber;
