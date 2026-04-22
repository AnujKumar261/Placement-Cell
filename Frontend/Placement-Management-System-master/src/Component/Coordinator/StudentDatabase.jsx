import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const StudentDatabase = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/students/");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (searchTerm.startsWith('<')) {
      const value = parseFloat(searchTerm.slice(1));
      return student.tenthPercentage < value || student.twelfthPercentage < value;
    } else if (searchTerm.startsWith('>')) {
      const value = parseFloat(searchTerm.slice(1));
      return student.tenthPercentage > value || student.twelfthPercentage > value;
    } else {
      const values = Object.values(student).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    }
  });

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(
      filteredStudents.map(student => [
        student.firstName,
        student.lastName,
        student.email,
        student.jobRole,
        student.address,
        student.city,
        student.pincode,
      ])
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'students.xlsx');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#e6dcdc',
      // minHeight: '100vh'
    }}>
      <h2 style={{
        color: '#333',
        fontSize: '28px',
        marginBottom: '20px',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>Student List</h2>
      <input
        type="text"
        placeholder="Search by name, email, job role, or use < or > followed by a number"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '80%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
          color:'#000',
        }}
      />
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width:'80%',
          marginBottom: '20px',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        onClick={downloadExcel}
      >
        Download Excel
      </button>
      <table style={{
        width: '80%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>First Name</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Last Name</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Job Role</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Address</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>City</th>
            <th style={{ padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr
              key={student.id}
              style={{
                backgroundColor: index % 2 === 0 ? '#fafafa' : '#ffffff',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fafafa' : '#ffffff')}
            >
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.firstName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.lastName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.jobRole}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.address}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.city}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDatabase;
