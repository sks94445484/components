import React from "react";
import "./Table.css";

const StickyTable = () => {
  const data = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    age: 20 + (i % 10),
    city: `City ${i + 1}`,
    country: `Country ${i + 1}`,
    id1: i + 1,
    name1: `Name ${i + 1}`,
    age1: 20 + (i % 10),
    city1: `City ${i + 1}`,
    country1: `Country ${i + 1}`,
     id2: i + 2,
    name2: `Name ${i + 2}`,
    age2: 20 + (i % 10),
    city2: `City ${i + 2}`,
    country2: `Country ${i + 2}`,
    id3: i + 2,
    name3: `Name ${i + 2}`,
    age3: 20 + (i % 10),
    city3: `City ${i + 2}`,
    country3: `Country ${i + 2}`,
  }));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="header">
            <th className="sticky-col left-0 sticky-header" >ID</th>
            <th className="sticky-col left-80 sticky-header" >Name</th>
            <th className="sticky-header">Age</th>
            <th className="sticky-header">City</th>
            <th className="sticky-header">Country</th>
            <th className=" sticky-header">ID1</th>
            <th className=" sticky-header">Name1</th>
            <th className="sticky-header">Age1</th>
            <th className="sticky-header">City1</th>
            <th className="sticky-header">Country1</th>
            <th className=" sticky-header">ID2</th>
            <th className=" sticky-header">Name2</th>
            <th className="sticky-header">Age2</th>
            <th className="sticky-header">City2</th>
            <th className="sticky-header">Country2</th>
            <th className=" sticky-header">ID3`</th>
            <th className=" sticky-header">Name3</th>
            <th className="sticky-header">Age3</th>
            <th className="sticky-header">City3</th>
            <th className="sticky-header">Country3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="sticky-col left-0"
                style={{
                    width:"20px",
                }}
              >{row.id}</td>
              <td className="sticky-col left-80"
                style={{
                    width:"50px",
                }}
              >{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td >{row.id1}</td>
              <td >{row.name1}</td>
              <td>{row.age1}</td>
              <td>{row.city1}</td>
              <td>{row.country1}</td>
              <td >{row.id2}</td>
              <td >{row.name2}</td>
              <td>{row.age2}</td>
              <td>{row.city2}</td>
              <td>{row.country2}</td>
              <td >{row.id3}</td>
              <td >{row.name3}</td>
              <td>{row.age3}</td>
              <td>{row.city3}</td>
              <td>{row.country3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyTable;
