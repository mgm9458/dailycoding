function solution(n_str) {
 for(let i = 0; i < n_str.length; i++){
    if(n_str[i] !== '0'){
     return n_str.slice(i)
    }}
}

// return String(Number(n_str))
// return n_str.replace(/^0+/,'')
//0으로 시작하면서(^) 0으로 반복되는거까지(+) 빈문자로 만들거야라는 정규표현식임.