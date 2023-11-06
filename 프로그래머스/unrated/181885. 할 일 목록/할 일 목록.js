function solution(todo_list, finished) {
//     let ans = [];
//     for(i = 0; i < todo_list.length; i++){
//       if(finished[i] === false){ans.push(todo_list[i])}
//     }
//     return ans;
  return todo_list.filter((el, idx) => {return !finished[idx]})
}