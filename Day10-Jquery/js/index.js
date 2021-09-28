// variable declarations

// create a class named Program with term number and term name members
let myName;
let myId;
let login;
let campus;
let program;

class Program {
  constructor(termNumber, termName) {
    this.termNumber = termNumber;
    this.termName = termName;
  }
}

let progs = [
  new Program(1, "CP for Term 1"),
  new Program(2, "SE for Term 2"),
  new Program(3, "ISE for Term 3"),
  new Program(4, "SDNE for Term 4"),
];

// create a class course with termNumber, course code, course type and course image
class Course {
  constructor(termNumber, courseType, courseCode, image) {
    this.termNumber = termNumber;
    this.courseType = courseType;
    this.courseCode = courseCode;
    this.image = image;
  }
}

let crs = [
  new Course(1, "PROG", "10082", "./../images/java.png"),
  new Course(1, "SYST", "10085", "./../images/se.png"),
  new Course(1, "DBAS", "10088", "./../images/sql.jpg"),
  new Course(2, "COMM", "10091", "./../images/network.png"),
  new Course(2, "PROG", "10083", "./../images/cplusplus.png"),
  new Course(2, "SYST", "10086", "./../images/os.png"),
  new Course(3, "DBAS", "10089", "./../images/nosql.png"),
  new Course(3, "COMM", "10091", "./../images/wireshark.png"),
  new Course(3, "PROG", "10084", "./../images/python.png"),
  new Course(4, "SYST", "10087", "./../images/cg.jpg"),
  new Course(4, "DBAS", "10090", "./../images/dbc.png"),
  new Course(4, "COMM", "10092", "./../images/network.png"),
];

$(document).ready(function () {
  // Make an ajax call to get the data from data/A1-JSON.json and store it in local storage
  $.getJSON("data/A1-JSON.json", function (data) {
    console.log(JSON.stringify(data));

    myName = data.AboutMe.myName;
    myId = data.AboutMe.myID;
    login = data.AboutMe.myLogin;
    campus = data.AboutMe.myCampus;
    program = data.AboutMe.myProgram;

    localStorage.setItem("myName", myName);
    localStorage.setItem("myId", myId);
    localStorage.setItem("login", login);
    localStorage.setItem("campus", campus);
    localStorage.setItem("program", program);

    $("#header").text(`Day 10/100 for ${myName} / ${myId}`);
    $("#footer").text(
      `Login: ${login} / Campus: ${campus} / Program: ${program}: `
    );

    showCourses(1);
  });
});

function showCourses(id) {
  $(".list").html("");
  crs.forEach((c) => {
    if (c.termNumber == id) {
      $(".list").append(
        `<p>
          Course: ${c.courseType + c.courseCode} <img src="${
          c.image
        }" width = "30px" />
        </p>`
      );
    }
  });
}

function toggleStyle() {
  $(".term1").toggleClass("term1-style");
}

function highlightProg() {
  crs.forEach((c) => {
    if (c.courseType == "PROG") {
      $(`.term${c.termNumber}`).toggleClass("highlight-style");
    }
  });
}
