function solution(num_list) {
  let sum1 = [...num_list].filter((el, i) => i % 2 === 0).reduce((acc, cur) => acc + cur)
  let sum2 = [...num_list].filter((el, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur)

  return Math.max(sum1, sum2)
}