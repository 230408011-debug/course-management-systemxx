import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents,
} from "./analytics.js";

console.log("Fetching data from database...");

fetchStudents((rawData) => {
  console.log("Data received!\n");

  const students = rawData.map((d) => new Student(d.id, d.name, d.courses));

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  try {
    students[0].id = 999; // strict mode'da TypeError fırlatır
  } catch (err) {
    // beklenen durum, id korunuyor
  }
  const unchanged = students[0].id === 1;
  console.log(
    `Final ID: ${students[0].id}` +
      (unchanged ? " (Success: ID did not change)" : " (FAIL: ID changed!)")
  );

  console.log("\n--- Analytics Report ---");
  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const in102 = filterStudents(students, (s) =>
    s.courses.some((c) => c.courseId === 102)
  );
  console.log(`Students in Course 102: ${in102.map((s) => s.name).join(", ")}`);
});