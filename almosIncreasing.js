function almostIncreasingSequence(sequence) {
  let n = sequence.length
  let found = false
  for(let i = 0; i < n; i++){
    if(sequence[i-1] >= sequence[i]){
      if(found) return false
      else {
        if(sequence[i-1] >= sequence[i+1]) {
          sequence.splice(i-1,1)
          i -= 2
        }
        else {
          sequence.splice(i,1)
          i--
        }
        found=true
    }
    }
  }
  return true
}
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
