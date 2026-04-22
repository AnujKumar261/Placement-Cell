// import React, { useState } from 'react';
// import axios from 'axios';
// import './Generate.css';

// const GenerateReport = () => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('title', title);

//     try {
//       await axios.post('http://localhost:9090/api/notes/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('File uploaded successfully');
//     } catch (error) {
//       alert('Error uploading file');
//     }
//   };

//   return (
//     <div className="gr-container">
//       <h2 className="gr-h2">Generate Report</h2>
//       <form className="gr-form" onSubmit={handleSubmit}>
//         <div>
//           <label className="gr-label">Title:</label>
//           <input type="text" className="gr-input-text" value={title} onChange={handleTitleChange} />
//         </div>
//         <div>
//           <label className="gr-label">Choose Excel File:</label>
//           <input type="file" className="gr-input-file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileChange} />
//         </div>
//         <button type="submit" className="gr-button-submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default GenerateReport;


import React, { useState } from 'react';
import axios from 'axios';

const GenerateReport = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      await axios.post('http://localhost:9090/api/report/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#e6dcdc', 
      padding: '20px' 
    }}>
      <h2 style={{ 
        marginBottom: '20px', 
        color: '#333', 
        fontSize: '24px', 
        fontWeight: 'bold' 
      }}>Generate Report</h2>
      <form 
        style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '8px', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
          padding: '20px', 
          width: '400px', 
          display: 'flex', 
          flexDirection: 'column' 
        }} 
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            marginBottom: '5px', 
            color: '#555', 
            fontSize: '16px' 
          }}>Title:</label>
          <input
            type="text"
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #d4d4d4', 
              fontSize: '14px', 
              width: '100%', 
              boxSizing: 'border-box',
              color: '#333', 
            }}
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            marginBottom: '5px', 
            color: '#555', 
            fontSize: '16px' 
          }}>Choose Excel File:</label>
          <input
            type="file"
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #d4d4d4', 
              fontSize: '14px', 
              width: '100%', 
              boxSizing: 'border-box',
              color: '#333', // Set the text color to a desired color
            }}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          style={{ 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontSize: '16px', 
            transition: 'background-color 0.3s ease' 
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default GenerateReport;
