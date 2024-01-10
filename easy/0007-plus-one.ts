function plusOne(digits: number[]): number[] {
  const integerPlusOne = BigInt(digits.join('')) + 1n

  return integerPlusOne
    .toString()
    .split('')
    .map((stringDigit) => Number(stringDigit))
}

console.log(plusOne([1, 2, 3])) // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])) // [ 4, 3, 2, 2 ]
console.log(plusOne([9])) // [ 1, 0 ]
