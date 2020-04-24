/**
 * Returns true or false if the content of two arrays are equal, considering the order 
 * 
 * [ 1, 2, 3 ] and [ 3, 2, 1 ] -> false
 * [ 1, 2, 3, 4 ] and [ 1, 2, 3 ] -> false
 * [ 1 ] amd [ 1 ] -> true
 * [ 1, 2, 3 ] and [ 1, 2, 3 ] -> true
 * 
 * @param { *[] } a - One of the arrays to compare 
 * @param { *[] } b - One of the arrays to compare
 * @returns { boolean } - Returns true if both arrays have the same content
 */
function areArrayEqualAndOrdered( a, b  ){
  const haveSameLength = a.length === b.length
  const foundDifference = a.some( ( value, index) => value !== b[index] )
  return haveSameLength && !foundDifference
}

/**
 * Returns true or false if the content of two arrays are equal, regardless of the order 
 * 
 * [ 1, 2, 3 ] and [ 3, 2, 1 ] -> true
 * [ 1, 2, 3, 4 ] and [ 1, 2, 3 ] -> false
 * [ 1 ] amd [ 1 ] -> true
 * [ 1, 2, 3 ] and [ 1, 2, 3 ] -> true
 * 
 * @param { *[] } a - One of the arrays to compare 
 * @param { *[] } b - One of the arrays to compare
 * @returns { boolean } - Returns true if both arrays have the same content
 */
function areArraysElementEqual( a, b ){
  const haveSameLength = a.length === b.length
  const sortedA = a.slice().sort()
  const sortedB = b.slice().sort()
  const foundDifference = sortedA.some( ( value, index) => value !== sortedB[index] )
  return haveSameLength && !foundDifference
}