function solution(arr, n) {
  if(arr.length % 2 === 0){
    return arr.map((el, i) => i % 2 !== 0 ? el + n : el)
  }
  return arr.map((el, i) => i % 2 === 0 ? el + n : el)

}
