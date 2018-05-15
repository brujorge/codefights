function adjacentElementsProduct(inputArray) {
  var result;
  for(let i = 0; i<inputArray.length; i++){
    let product = inputArray[i]*inputArray[i+1]
    if(result==null) result = product
    else if(product > result) result = product
  }
  return result
}
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
