export default function createEmployeesObject(departmentName, employees) {
  const outputObject = { [departmentName]: [] };
  for (const emp of employees) {
    outputObject[departmentName].push(emp);
  }
  return outputObject;
}
