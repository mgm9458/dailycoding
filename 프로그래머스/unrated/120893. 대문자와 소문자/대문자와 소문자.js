function solution(my_string) {
  // const regex = /[a-z]/g
  // return [...my_string].map((el) => el.match(regex) !== null ? el.toUpperCase() : el.toLowerCase())

  let ans = []
  
  for(let el of my_string){
    if(el===el.toUpperCase()){
      ans.push(el.toLowerCase())
    }
    else {ans.push(el.toUpperCase())}
  }

  return ans.join('')
}