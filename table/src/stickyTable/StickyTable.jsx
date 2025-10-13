import React from "react";
import "./Table.css";

const StickyTable = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
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
  }));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyTable;
