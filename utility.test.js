const utility = require('./utility')

describe('utility function', () => {
  test('accepts number and returns string of number', () => {
    expect(utility(3.14)).toBe('3.14')
    expect(utility(3.14)).not.toBe(3.14)
  })

  test('maximum 4 decimal places', () => {
    expect(utility(0.12345)).toBe('0.1234')
  })

  test('no trailing zeros', () => {
    expect(utility(1.000)).toBe('1')
    expect(utility(6.660)).toBe('6.66')
  })

  test('does not round', () => {
    expect(utility(75.44519939334)).not.toBe('75.4452')
  })

  test('pass these examples', () => {
    expect(utility(15.0)).toBe('15')
    expect(utility(75.44510939334)).toBe('75.4451')
    expect(utility(75.4450)).toBe('75.445')
    expect(utility(6)).toBe('6')
    expect(utility(1.5)).toBe('1.5')
  })
})
