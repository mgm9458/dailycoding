function solution(my_string, letter) {
     let answer = ''
     for(i = 0; i < my_string.length; i++){
         if(my_string.charAt(i) !== letter){
             answer += my_string.charAt(i)
         }
     }
  return answer;
    //let answer = [...my_string].filter((el) => !el.includes(letter))
    //return answer.join('')
    // let answer = ''
    // for(let i = 0; i < my_string.length; i++){
    //     if(!my_string[i].includes(letter)){
    //         answer += my_string[i]
    //     }
    // }
    // return answer;
}