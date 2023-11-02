function solution(arr) {
    let answer = [] ; 
    arr.map(function(el){
        for(let i = 1; i <= el; i++){
            answer.push(el)
        }
    })
    return answer ; 
}