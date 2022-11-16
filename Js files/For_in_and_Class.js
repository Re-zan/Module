import { name, Departments } from "./Topics.js";

//for in
name(["zannat", "priya", "mariya", "rahi"]);
console.log(`----`);

//class
const detp1 = new Departments("cmt");
console.log(`Department Name: ${detp1.departmentname}`);
console.log(`----`);
console.log(`Teacher Names:`);
detp1.teacherwork([
  "Abdus Salam",
  "Shourov Ahmed",
  "Shohan Hossin",
  "Sojol Islam",
]);
console.log(`----`);
console.log(`Student Names & Total:`);
detp1.students(["zannat", "priya", "sadia", "rahi", "maru"]);
console.log(`----`);
