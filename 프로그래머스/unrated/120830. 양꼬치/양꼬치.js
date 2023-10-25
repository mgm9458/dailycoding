function solution(n, k) {
// n = 양꼬치
 //k = 음료수
  //  양꼬치 수 * 양꼬치가격 + 음료수 값 * 음료수 갯수 - 음료수 가격 * Math.floor(n / 10)
return (n * 12000) + (k * 2000) - 2000 * Math.floor(n / 10)

}