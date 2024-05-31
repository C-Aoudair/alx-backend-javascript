// export default function createIteratorObject(report) {
//   return (function* generator() {
//     for (const department of Object.values(report.allEmployees)) {
//       for (const employee of department) {
//         yield employee;
//       }
//     }
//   }());
// }

export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const employeesList = [];
  for (const employee of employees) {
    employeesList.push(...employee);
  }
  let index = 0;
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        if (index < employeesList.length) {
          const value = employeesList[index];
          index += 1;
          return { value, done: false };
        }
        return { done: true };
      },
    }),
  };
}
