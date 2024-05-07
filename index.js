function findIndex(numbers,target)
  {
      numbers.sort((a,b)=> a-b);
  
      var index = numbers.indexOf(target);
      // If target not found
      if (index === -1)
        {
            for (let i = 0; i < numbers.length; i++) {
                if(numbers[i] > target){
                    index = i;
                    break;
                }
            }
      }
      return index;
  }
  
  //Test Case 1   output 2
  var case1 = findIndex([1,7,3,5,6,9,15],5) 
  console.log(case1); //output 2
  
  //Test Case 2   output 1
  var case2 = findIndex([5,6,1,3],2) 
  console.log(case2); //output 1

  //Test Case 3   output 4
  var case3 = findIndex([1,3,5,6],7) 
  console.log(case2); 