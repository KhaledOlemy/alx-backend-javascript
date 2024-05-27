export default function appendToEachArrayValue(array, appendString) {
  const outputArray = [];
  for (const val of array) {
    outputArray.push(appendString + val);
  }
  return outputArray;
}
