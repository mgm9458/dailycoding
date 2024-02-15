function solution(arr, intervals) {
  let newArr = [];
  let newArr2 = [];
  

  newArr.push(arr.slice(intervals[0][0],intervals[0][1] + 1))
  newArr2.push(arr.slice(intervals[1][0],intervals[1][1] + 1))
  
  
  return [...newArr.flat(), ...newArr2.flat()]
}