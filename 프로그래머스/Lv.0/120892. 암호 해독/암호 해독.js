function solution(cipher, code) {
  let ans = ''
  for(i = code; i <= cipher.length; i+=code){
      ans += cipher[i - 1]
    }
    return ans
  }

