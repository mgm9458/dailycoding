function solution(binomial) {
  const [A, OP, B] = binomial.split(' ')
  if(OP === '+'){
    return Number(A) + Number(B)
  } else if(
    OP === '-'){
      return Number(A) - Number(B)
    } else{
      return Number(A) * Number(B)
    }
  
}