function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues)+1 - statues.length
}
console.log(makeArrayConsecutive2([2,5,6,8]));