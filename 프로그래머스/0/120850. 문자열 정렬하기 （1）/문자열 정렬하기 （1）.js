function solution(my_string) {
  return [...my_string].filter((el) => el >= 0).sort((x, y) => x - y).map(Number)
  
}


//여기서 .map(Number)는 .map((el) => Number(el))의 축약형이다!