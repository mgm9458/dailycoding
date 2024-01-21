function solution(my_string) {
  let ans = [];

  for(i = 1; i <= my_string.length; i++){
     ans.push(my_string.slice(-i))
  }

return ans.sort()
}