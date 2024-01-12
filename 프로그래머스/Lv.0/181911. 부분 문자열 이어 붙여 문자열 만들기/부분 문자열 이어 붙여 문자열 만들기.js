function solution(my_strings, parts) {
  let ans = [];

  for(let i = 0; i < my_strings.length; i++){
    ans.push(my_strings[i].slice(parts[i][0], parts[i][1]+1))
  }
  return ans.join('')
}
