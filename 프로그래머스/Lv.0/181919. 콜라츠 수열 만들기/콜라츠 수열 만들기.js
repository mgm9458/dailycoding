function solution(n) {
    var answer = [];
    return answer;
}function solution(n) {
  let ans = [n];

  while(n !== 1){
  if(n % 2 === 0){
    n = n / 2;
    ans.push(n)
  }else if(n % 2 !== 0){
    n = 3 * n + 1;
    ans.push(n)
  }
}
return ans
}