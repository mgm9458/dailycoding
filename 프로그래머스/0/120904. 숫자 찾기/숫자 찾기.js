function solution(num, k) {
  let result = String(num).split('').map(Number).findIndex((el) => el === k)
  
  
  return result !== -1 ? result +1 : result
  
}