export default function updateStudentGradeByCity(students = [], city, newGrades = []) {
  return students.filter((item) => item.location === city)
    .map((item) => ({
      id: item.id,
      firstName: item.firstName,
      location: city,
      grade: (newGrades
        .filter((grade) => grade.studentId === item.id)
        .pop() || { grade: 'N/A' }).grade,
    }));
}
