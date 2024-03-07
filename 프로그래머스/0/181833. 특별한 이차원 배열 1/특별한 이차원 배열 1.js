function solution(n) {
  let answer = [];

  for (i = 0; i < n; i++) {
    let result = [];

    for (j = 0; j < n; j++) {
      if (i === j) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
    answer.push(result);
  }
  return answer;
}