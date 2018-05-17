function matrixElementsSum(matrix) {
const haunted = []
const good = []
for(let i = 0; i<matrix.length; i++){
  for(let j=0; j<matrix[i].length; j++){
    if(haunted.includes(j)) continue
    if(matrix[i][j]==0) haunted.push(j)
    else good.push(matrix[i][j])
  }
}
return good.reduce((acc,val) => {return acc+val},0)
}

console.log(matrixElementsSum([[0]]));