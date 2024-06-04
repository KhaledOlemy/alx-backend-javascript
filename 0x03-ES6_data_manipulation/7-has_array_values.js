export default function hasValuesFromArray(inputSet = [], inputArray = []) {
  return inputArray.every((item) => inputSet.has(item));
}
