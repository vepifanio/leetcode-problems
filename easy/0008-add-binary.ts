function addBinary(a: string, b: string): string {
  const result: string[] = []

  const longestBinary = a.length > b.length ? a : b
  const shortestBinary = longestBinary === a ? b : a

  const lenghtDifference = longestBinary.length - shortestBinary.length

  let carry = '0'

  for (let i = longestBinary.length - 1; i >= 0; i--) {
    const firstDigit = longestBinary.charAt(i)
    const secondDigit = shortestBinary.charAt(i - lenghtDifference) || '0'

    let addition
    const currentCarry = carry

    if (firstDigit === '0' && secondDigit === '0') {
      addition = '0'
      carry = '0'
    } else if (
      (firstDigit === '1' && secondDigit === '0') ||
      (firstDigit === '0' && secondDigit === '1')
    ) {
      addition = '1'
      carry = '0'
    } else {
      addition = '0'
      carry = '1'
    }

    if (addition === '0' && currentCarry === '0') {
      addition = '0'
    } else if (
      (addition === '1' && currentCarry === '0') ||
      (addition === '0' && currentCarry === '1')
    ) {
      addition = '1'
    } else {
      addition = '0'
      carry = '1'
    }

    result.push(addition)
  }

  if (carry === '1') {
    result.push('1')
  }

  return result.reverse().join('')
}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
