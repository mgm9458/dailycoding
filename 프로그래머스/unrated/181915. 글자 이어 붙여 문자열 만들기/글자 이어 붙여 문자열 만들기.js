function solution(my_string, index_list) {
  let ans = ''
  for(i = 0; i < index_list.length; i++){
  ans += my_string[index_list[i]]
  }  
  return ans
}