import React, { useState } from 'react';


// ---- Data Creation -----------------------------------------
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name; this.age = age;
    this.enrolled = enrolled; this.score = score;
  }
}

let data = [
  new Student('B', 28, false, 70),
  new Student('E', 18, true, 80),
  new Student('A', 29, true, 95),
  new Student('D', 40, false, 67),
  new Student('C', 30, true, 92),
];

// ----------------------------------------------------------

export default function SortReact() {

  const [studs, setStuds] = useState(data);
  const rows = [];

  studs.forEach((stud) => {
    rows.push(<BodyRow stud={stud} key={stud.name} />)
  })

  const sortBy = (key) => {
    let studsCopy = [...studs];
    const compareBy = (key) => {    // key is of name, age, enrolled, score
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
    studsCopy.sort(compareBy(key));
    setStuds(studsCopy);
  }

  return (
    <table className="table" border="1px">
      <thead className="header">
        <tr>
          <td onClick={() => sortBy('name')}>이름</td>
          <td onClick={() => sortBy('age')}>나이</td>
          <td onClick={() => sortBy('enrolled')}>등록</td>
          <td onClick={() => sortBy('score')}>점수</td>
        </tr>
      </thead>
      <tbody className="body">
        {rows}
      </tbody>
    </table>
  );
}

// unused
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

// unused
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
