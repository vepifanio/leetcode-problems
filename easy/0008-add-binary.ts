// function addBinary(a: string, b: string): string {
//   const result: number[] = []

//   const longestBinary = a.length > b.length ? a : b
//   const shortestBinary = longestBinary === a ? b : a

//   const longestBinaryDigits = longestBinary.split('')
//   const shortestBinaryDigits = shortestBinary.split('')

//   const lenghtDifference = longestBinary.length - shortestBinary.length

//   const carry = 0

//   for (let i = longestBinary.length - 1; i >= 0; i--) {
//     const firstDigit = Number(longestBinaryDigits[i])
//     const secondDigit = Number(shortestBinaryDigits[i - lenghtDifference]) || 0

//     let resultedDigit

//     if (firstDigit === 0 && secondDigit === 0) {
//       resultedDigit = 0
//     } else if (firstDigit === 1 && secondDigit === 1) {
//       resultedDigit = 0
//     } else {
//       resultedDigit = 1
//     }

//     console.log(resultedDigit)
//   }

//   return result.join('')
// }

// console.log(addBinary('111', '101'))

function addBinary(a: string, b: string): string {
  let result = ''

  let carry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const num1 = parseInt(a[i] ?? '0')
    const num2 = parseInt(b[j] ?? '0')
    const sum = num1 + num2 + carry

    carry = sum > 1 ? 1 : 0
    result = (sum % 2 === 1 ? '1' : '0') + result
  }

  return carry ? '1' + result : result
}
