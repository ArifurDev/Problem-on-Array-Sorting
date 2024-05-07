/**
  *Test Case 3:
  *Input: nums = [1,3,5,6], target = 7
  *Output: 4
 */

var numbers = [1,3,5,6];
var target = 7;
numbers.push(target)
numbers.sort((a,b) =>a-b);

var index = numbers.indexOf(target);
console.log(index); //output 4
