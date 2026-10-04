export function calculateClassAverage(students, courseId) {
  const grades = students.flatMap((s) =>
    s.courses.filter((c) => c.courseId === courseId).map((c) => c.grade)
  );
  if (grades.length === 0) return 0;
  return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((best, current) =>
    current.getAverage() > best.getAverage() ? current : best
  );
}

export function filterStudents(students, criteriaFn) {
  const result = [];
  for (const s of students) {
    if (criteriaFn(s)) result.push(s);
  }
  return result;
}