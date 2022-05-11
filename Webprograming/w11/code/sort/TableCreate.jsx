import React from 'react';

// https://ko.reactjs.org/docs/thinking-in-react.html


// ---- Data ------------------------------------------------

// the creation of objects
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name; this.age = age;
    this.enrolled = enrolled; this.score = score;
  }
}

let studs = [
  new Student('B', 28, false, 70),
  new Student('E', 18, true, 80),
  new Student('A', 29, true, 95),
  new Student('D', 40, false, 67),
  new Student('C', 30, true, 92),
];

// ---------------------------------------------------

const TableCreate = () =>  <CreateTable studs={studs} />

const CreateTable = ({ studs }) => {
  const headRows = [];
  const rows = [];
  headRows.push(<HeadRow key={0} />)
  studs.forEach((stud) => {
    rows.push(<BodyRow stud={stud} key={stud.name} />)
  })
  
  return (
    <table border="1px">
      {headRows}
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const HeadRow = () => {
  return (
    <thead>
      <tr>
        <td>이름</td><td>나이</td> <td>등록</td><td>점수</td>
      </tr>
    </thead>
  )
}

const BodyRow = ({ stud }) => {
  return (
    <tr>
      <td>{stud.name}</td>
      <td>{stud.age}</td>
      <td>{stud.enrolled ? "재학" : "휴학"}</td>
      <td>{stud.score}</td>
    </tr>
  );
}

export default TableCreate;