export default function createIteratorObject(report) {
  const outputArray = [];
  for (const dept of Object.values(report.allEmployees)) {
    for (const emp of dept) {
      outputArray.push(emp);
    }
  }
  return outputArray;
}
