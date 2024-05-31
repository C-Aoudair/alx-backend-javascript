export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for(let value of array) {
    array.push(value + appendString);
  }
  
  return newArray;
}
