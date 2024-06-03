export default function getStudentsByLocation(input, city) {
  return input.filter((item) => item.location === city);
}
