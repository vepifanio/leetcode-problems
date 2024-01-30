function getRow(rowIndex: number): number[] {
  const result: number[][] = []

  for (let i = 0; i <= rowIndex; i++) {
    const rowResult: number[] = []

    rowResult[0] = 1
    rowResult[i] = 1

    let nextIndex = 1

    while (nextIndex < i) {
      rowResult[nextIndex] =
        result[i - 1][nextIndex - 1] + result[i - 1][nextIndex]
      nextIndex++
    }

    result.push(rowResult)
  }

  return result[rowIndex]
}

console.log(getRow(3))
// [1, 3, 3, 1]
