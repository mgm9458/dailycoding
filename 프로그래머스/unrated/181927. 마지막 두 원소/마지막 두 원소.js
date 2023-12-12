function solution(num_list) {
  num_list.reverse()

  let fir = num_list[0];
  let sec = num_list[1];

  fir > sec ? num_list.unshift(fir - sec) : num_list.unshift(fir * 2)
  
  return num_list.reverse()
}