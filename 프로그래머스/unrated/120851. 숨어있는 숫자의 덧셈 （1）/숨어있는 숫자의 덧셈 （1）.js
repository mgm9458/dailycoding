function solution(my_string) {
  return [...my_string].map((el) => Number(el)).filter((el) => Number(el)).reduce((pre,cur) => pre + cur)

}