function solution(my_string, m, c) {
  let newArr = [];
  let num = m;

  for (i = 0; i < my_string.length; i += m) {
    let str = my_string.slice(i, num);
    newArr.push(str.charAt(c - 1));
    num += m;
  }
  return newArr.join("");
}