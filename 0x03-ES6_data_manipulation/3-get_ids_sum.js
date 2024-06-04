export default function getStudentIdsSum(input) {
  return input.reduce((acc, curr) => acc + curr.id, 0);
}
