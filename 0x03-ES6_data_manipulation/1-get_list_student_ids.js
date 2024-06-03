export default function getListStudentIds(input) {
  if (input instanceof Array) {
    return input.map((item) => item.id);
  }
  return [];
}
