/**
 * A function that sorts an array of numbers in ascending order
 *  [ 2, 3, 1 ]             => [ 1, 2, 3 ]
 *  [ 8, 1, 3, 5, 4, 2, 9 ] => [ 1, 2, 3, 4, 5, 8, 9 ]
 *  [ 1, 2, 3, 4, 5 ]       => [ 1, 2, 3, 4, 5 ]
 * @param { number[] } numbers - An array of numbers
 * @return { number[] } - An array of numbers sorted in ascending order
 */
function sortNumbersAscending( numbers ) {
  return numbers.sort( (a, b) => a - b  ) 
}

/**
 * A function that sorts an array of numbers in descending order
 *  [ 2, 3, 1 ]             => [ 3, 2, 1 ]
 *  [ 8, 1, 3, 5, 4, 2, 9 ] => [ 9, 8, 5, 4, 3, 2, 1 ]
 *  [ 1, 2, 3, 4, 5 ]       => [ 5, 4, 3, 2, 1 ]
 * @param { number[] } numbers - An array of numbers
 * @return { number[] } - An array of numbers sorted in descending order
 */
function sortNumbersDescending( numbers ) {
  return numbers.sort( (a, b) =>  b - a ) 
}