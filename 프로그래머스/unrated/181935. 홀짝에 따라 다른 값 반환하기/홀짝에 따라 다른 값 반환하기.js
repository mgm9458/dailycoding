function solution(n){
    let answer = 0;
  
    if(n % 2 !== 0){
      for(i = 1; i <= n; i += 2){
        answer += i
      }
    }else if(n % 2 === 0){
      for(i = 2; i <= n; i += 2){
        answer = answer + i ** 2
        // answer = answer + Math.pow(i, 2)
      }
    } return answer;
  }
