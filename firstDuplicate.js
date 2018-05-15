var a = [2, 3, 3, 1, 5, 2]
function firstDuplicate(a) {
  for(let i of a){
    let position = Math.abs(i) - 1
    if(a[position] <0) return position + 1
    a[position] = a[position] * -1
  }
  return -1
}

firstDuplicate(a)
