let str = [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4]
let count = []
let continued = false
function checkZigzag(str){
  if(str.length<=2) return 1
  for(let i = 1; i<str.length-1; i++){
    if(!(str[i]<=str[i-1] !== str[i]<=str[i+1])){
      if(!continued) {
        count.unshift(3)
        continued = true
      }
      else count[0]++
    } else continued = false
  }
  return count.sort((a,b) => a>b)[0]
}
console.log(checkZigzag(str))