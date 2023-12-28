function solution(num_list, n) {
  // let ans = num_list.slice(n)
  // let ans2 = num_list.slice(0, n)

  // return ans.concat(ans2)

  return [...num_list.slice(n), ...num_list.slice(0, n)]
}
