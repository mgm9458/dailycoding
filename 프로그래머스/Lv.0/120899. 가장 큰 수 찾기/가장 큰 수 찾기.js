function solution(array) {
  let maxNum = Math.max(...array)
  let nIndex = array.indexOf(maxNum)

  return [maxNum, nIndex]
}