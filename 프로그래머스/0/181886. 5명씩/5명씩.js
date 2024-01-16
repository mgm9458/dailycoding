function solution(names) {
  let ans = []

  for(i = 0; i < names.length; i+=5){
    ans.push(names[i])
  }
  return ans
}