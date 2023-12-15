function solution(my_string, alp) {
  let arr = [];

  for(i = 0; i < my_string.length; i++){
   my_string[i] === alp ? arr.push(my_string[i].toUpperCase()) : arr.push(my_string[i]) 
  
  }

  return arr.join('')
} 

// function solution(my_string, alp) {
//   return [...my_string].map((el) => el === alp ? el.toUpperCase() : el).join('')
//}
