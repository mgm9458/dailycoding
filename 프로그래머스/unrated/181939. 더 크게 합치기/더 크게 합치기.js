function solution(a, b) {
  let sum = Number(String(a) + String(b))
  let sum2 = Number(String(b) + String(a))
  
  return Math.max(sum, sum2)
  
}
