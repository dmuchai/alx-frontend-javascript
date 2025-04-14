export default function createIteratorObject(report) {
  const employeeList = [];
  for (const dept of Object.values(report.allEmployees)) {
    employeeList.push(...dept);
  }
  return employeeList;
}
