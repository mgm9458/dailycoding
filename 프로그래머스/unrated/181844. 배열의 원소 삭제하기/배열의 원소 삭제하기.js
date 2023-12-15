function solution(arr, delete_list) {
return arr.filter((v) => {
    for(let i = 0; i < delete_list.length; i++){
      if(v === delete_list[i]){
        return false
      }
    }
    return v
  })
}