function solution(sides) {
    let result = sides.sort((x, y) => y - x)
    return result[0] < result[1] + result[2] ? 1 : 2
    }