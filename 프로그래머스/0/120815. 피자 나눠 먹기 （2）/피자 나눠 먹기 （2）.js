function solution(n) {
  // for (i = 1; i <= 100; i++) {
  //   if ((i * 6) % n === 0) {
  //     return i;
  //   }
  // }

  let piz = 1;

  while ((6 * piz) % n) {
    piz++;
  }
  return piz;
}