export default function createReportObject(employeesList) {
  const outputObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) { return Object.keys(employeesList).length; },
  };
  return outputObj;
}
