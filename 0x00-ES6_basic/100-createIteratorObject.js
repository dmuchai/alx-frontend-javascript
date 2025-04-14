export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employeeList = [];

  for (const dept of Object.values(allEmployees)) {
    employeeList = [...employeeList, ...dept];
  }

  return employeeList[Symbol.iterator]();
}
