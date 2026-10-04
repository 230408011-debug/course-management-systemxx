# University Course Management System

Web Programming - Fall 2026 - Assignment 3

## File Organization
- `models.js`: `Student` class. The `id` is defined with `Object.defineProperty` (read-only, non-configurable).
- `database.js`: `fetchStudents(callback)` simulates a 2-second async database call with `setTimeout`.
- `analytics.js`: `calculateClassAverage`, `findTopStudent` (uses `reduce`) and `filterStudents` (higher-order function).
- `main.js`: Entry point. Fetches data, creates `Student` instances, tests immutability and prints the report.
- `package.json`: `"type": "module"` enables ES module imports.

## Challenges
- Assigning to a non-writable property throws a TypeError in strict mode (ES modules), so I wrapped it in try/catch.
- All logic has to run inside the `fetchStudents` callback because the data arrives asynchronously.
- Using `reduce` to find the top student instead of a loop.
- The sample output in the assignment shows Zeynep as top student, but Ali has the highest average (87.5), so my output shows Ali.

## Run
node main.js