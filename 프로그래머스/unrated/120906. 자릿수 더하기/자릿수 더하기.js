function solution(n) {
    let result = String(n).split('').map((el) => Number(el)).reduce((acc, cur) => acc + cur)
    return result;
}