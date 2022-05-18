import React, { useState } from 'react';
import './table.css';          // .table th   .table td


// ---- Data Creation -----------------------------------------
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name; this.age = age; this.enrolled = enrolled; this.score = score;
  }
}

const data = [
  new Student('B', 28, false, 70),
  new Student('E', 18, true, 80),
  new Student('A', 29, true, 95),
  new Student('D', 40, false, 67),
  new Student('C', 30, true, 92),
];

// -------------------------------------------------------------

export default function SortReact2() {
  const [studs, setStuds] = useState(data);

  const rows = [];
  studs.forEach((stud) => rows.push(<BodyRow stud={stud} key={stud.name} />));

  const sortBy = (key) => {
    const studsCopy = [...studs];
    const compareBy = (key) => (a, b) => (a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0);
    studsCopy.sort(compareBy(key));
    setStuds(studsCopy);
  }

  return (
    <table className="table">
      <thead className="header">
        <tr>
          <th onClick={() => sortBy('name')}>이름</th>
          <th onClick={() => sortBy('age')}>나이</th>
          <th onClick={() => sortBy('enrolled')}>등록</th>
          <th onClick={() => sortBy('score')}>점수</th>
        </tr>
      </thead>
      <tbody className="body">
        {rows}
      </tbody>
    </table>
  );
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
