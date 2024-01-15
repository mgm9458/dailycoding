function solution(numbers) {
  let A = [...numbers].sort((x, y) => y - x)
  let B = [...numbers].sort((x, y) => x - y)

  return Math.max(A[0] * A[1], B[0] * B[1])

}
