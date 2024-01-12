function solution(cipher, code) {
  let ans = ''
  for(let i = code - 1; i < cipher.length; i+=code){
      ans += cipher[i]
    }
    return ans
  }

