export default function createIteratorObject(report) {
  return (function* generator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
