/**
 * Example on how to conditionally add a property to an object. 
 * Useful when you don't want the property to exist in an object in some cases
 * 
 * condition = true
 * { a: 'property', b: 'another property', c: 'This was conditionally added' }
 * 
 * condition = false
 * { a: 'property', b: 'another property' }
 * 
 * @param { boolean } condition - Set to true to add a property or to false to ignore it
 * @returns { object } myObject - The object which may or may not contain the 'c' property
 */
function addPropertyConditionally( condition ){
  const myObject = {
    a: 'property',
    b: 'another property',
    ...( condition && { c: 'This was conditionally added' } )
  }
  return myObject
}
