function solution(start_num, end_num) {
   let answer = [];
   for(i = start_num; i <= end_num; i++){
      answer.push(i)
   }
   return answer;
}

// function solution(start_num, end_num) {
//    let answer = Array((end_num + 1) - start_num).fill(start_num).map((el, idx) => el + idx)
//  return answer;
// }

