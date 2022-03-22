/*
 1. Literal 방법으로 객체 구성
 - 배열 이름 students : 3 개의 stud1, stud2, stud3 로 구성됨
 - 객체 stud1, stud2, stud3 : 3 개의 프로퍼티 name(스트링), id(number), scores(객체) 
 - 객체 scores : 두 개의 프로퍼티 pl(number), web(number)
*/

// name : , id : , scores :
const stud1 = { name : "lee", id : 14, scores : { pl : 78, web : 67}};
const stud2 = { name : "hong", id : 15, scores : { pl : 68, web : 96}};
const stud3 = { name : "jeong", id : 16, scores : { pl : 98, web : 87}};

const students = [stud1, stud2, stud3];

// for ... of 를 이용하여 각 학생의 web 값을 출력함 
for (s of students) {
  console.log(s.scores.web)
}

// 2. constructor functions 으로 객체 구성
// 위의 Literal 과 동일한 구조를 갖는 객체들을 new Student(....) 로 생성

function Student(name, id, pl, web) {
  this.name = name 
  this.id = id 
  this.scores = {pl, web}
}

var students2 = [
  new Student("lee", 14, 78, 67),
  new Student("hong", 15, 68, 96),
  new Student("jeong", 16, 98, 87),
]

// for ... of 를 이용하여 각 학생의 web 값을 출력함 
for (s of students2) {
  console.log(s.scores.web)
}
// students2.forEach(s => {
//   s.scores.pl
// })


