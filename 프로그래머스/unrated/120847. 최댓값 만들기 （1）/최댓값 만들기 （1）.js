function solution(numbers) {
  let answer = numbers.sort((x, y) => y - x)
  return answer[0] * answer[1]
}