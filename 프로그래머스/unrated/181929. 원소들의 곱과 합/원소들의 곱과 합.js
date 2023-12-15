function solution(num_list) {
    let ans = num_list.reduce((acc, cur) => acc * cur)
    let ans2 = num_list.reduce((acc, cur) => acc + cur) ** 2


    return ans < ans2 ? 1 : 0;
    
}
