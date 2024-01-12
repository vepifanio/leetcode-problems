function mySqrt(x: number): number {
  let currentRoot = 1

  if (x === 0) {
    return 0
  }

  while ((currentRoot + 1) * (currentRoot + 1) <= x) {
    currentRoot++
  }

  return currentRoot
}

console.log(mySqrt(4))
console.log(mySqrt(8))
