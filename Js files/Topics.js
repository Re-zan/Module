// for in loop
let name = (arrrr) => {
  for (let key in arrrr) {
    console.log(arrrr[key]);
  }
};

//class

class Departments {
  constructor(departmentname) {
    this.departmentname = departmentname;
  }

  teacherwork(teachernames) {
    for (let key in teachernames) {
      console.log(teachernames[key]);
    }
  }
  students(studentnames) {
    let aseanme = studentnames.sort();
    for (let key in aseanme) {
      console.log(aseanme[key]);
    }
    let total = studentnames.length;
    console.log(total);
  }
}

//let's find out vowels
let vowels = ["a", "e", "i", "o", "u", , "A", "E", "I", "O", "U"];

let findvowels = (sentence) => {
  let stringintoarray = Array.from(sentence);
  let count = 0;
  stringintoarray.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  console.log(count++);
};
// default  message

// let message = () => {
//   console.log("There is  nothing imported yet");
// };
// export default message;
export { name, Departments, findvowels };
