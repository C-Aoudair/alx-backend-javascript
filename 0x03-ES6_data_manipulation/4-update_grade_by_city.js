export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const studentGrade = grade.length === 0 ? { grade: 'N/A' } : { grade: grade[0].grade };
      return { ...student, ...studentGrade };
    });
}
