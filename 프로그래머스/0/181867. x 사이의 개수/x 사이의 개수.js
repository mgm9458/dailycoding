// function solution(myString) {
//   return myString.split('x').map((el) => el.length)
// }

function solution(myString) {
  let newArr = []
  let newStr = myString.split('x')

  for(i = 0; i < newStr.length; i++){
    newArr.push(newStr[i].length)
  }
  return newArr
}