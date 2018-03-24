const formatNumber = require('./formatNumber');

describe('formatNumber function', () => {

  test('accepts number and returns string of number', () => {
    expect(formatNumber(3.14)).toBe('3.14');
    expect(formatNumber(3.14)).not.toBe(3.14);
  });

  test('defaults 4 decimal places', () => {
    expect(formatNumber(0.12345)).toBe('0.1234');
  });

  test('will accept other amounts for decimal places', () => {
    expect(formatNumber(0.12345, 1)).toBe('0.1');
    expect(formatNumber(0.12345, 2)).toBe('0.12');
    expect(formatNumber(0.12345, 3)).toBe('0.123');
    expect(formatNumber(0.12345, 5)).toBe('0.12345');
  });

  test('defaults no trailing zeros', () => {
    expect(formatNumber(1.000)).toBe('1');
  });

  test('will leave trailing zeros if specified', () => {
    expect(formatNumber(1.000, 3, true)).toBe('1.000');
  });

  test('will add trailing zeros if not in original number', () => {
    expect(formatNumber(1, 3, true)).toBe('1.000');
  });

  test('can leave different amounts of trailing zeros', () => {
    expect(formatNumber(1, 3, true)).toBe('1.000');
    expect(formatNumber(1, 5, true)).toBe('1.00000');
    expect(formatNumber(1, 6, true)).toBe('1.000000');
    expect(formatNumber(1, 7, true)).toBe('1.0000000');
  });


  test('does not round', () => {
    expect(formatNumber(75.44519939334)).not.toBe('75.4452');
  });

  test('pass these examples', () => {
    expect(formatNumber(15.0)).toBe('15');
    expect(formatNumber(75.44510939334)).toBe('75.4451');
    expect(formatNumber(75.4450)).toBe('75.445');
    expect(formatNumber(6)).toBe('6');
    expect(formatNumber(1.5)).toBe('1.5');
  });
});
