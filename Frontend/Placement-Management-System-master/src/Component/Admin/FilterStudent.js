import React, { useEffect, useState } from "react";

function FilterStudent() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/api/drives/")
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);

    const result = students.filter((s) =>
      s.studentName?.toLowerCase().includes(value.toLowerCase()) ||
      s.companyName?.toLowerCase().includes(value.toLowerCase()) ||
      s.branch?.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <div>
      <h2>Filter Students</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={i}>
              <td>{s.studentName}</td>
              <td>{s.companyName}</td>
              <td>{s.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterStudent;