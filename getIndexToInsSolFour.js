/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Four
function getIndexToIns(arr, num) {              //1
  arr.push(num);                                //2
  arr.sort(function(a, b) {                     //3
    return a - b;                               //4
  });
  return arr.indexOf(num);                      //5
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*
//1
Function which takes in two arguments:
  Arg1: an Array
  Arg2: A number/integer

//2
The push() method adds one or more elements to the end of an array and returns the new length of the array.

Source - [https://devdocs.io/javascript/global_objects/array/push]

Takes the num input (5 in this scenario) and pushes it to the end of the original array ([5, 3, 20, 3, 5] The last item in this array is the num input)

//3, //4
The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

The sort method will return the original array sorted from lowest to highest. The sort order is determined by the return statement. If the return statement were to be b - a the sort order would be from highest to lowest.

//5
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

Source - [https://devdocs.io/javascript/global_objects/array/indexof]

The return statement will return the index position of the num input that was inserted into the original array ([3, 3, 5, 5, 20]). 




*/

