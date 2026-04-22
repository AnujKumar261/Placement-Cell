import React, { useState, useEffect } from "react";
import CompanyCSS from "./Company.module.css";

function Company() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/companys/");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.log("Error fetching companies:", error);
    }
  };

  return (
    <div className={CompanyCSS.companyBody}>
       <h1>Company Details</h1>
       <div className={CompanyCSS.tableContainer}>
       <table className={CompanyCSS.table}>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Package</th>
            <th>Profile</th>
            <th>No of candidates required</th>
            {/* <th>Apply form here</th> */}
          </tr>
        </thead>
        <tbody>
          
          {companies.map((company, index) => (
            <tr key={index}>
              <td data-label="Sl. No">{index + 1}.</td>
              <td data-label="Company Name">{company.companyName}</td>
              <td data-label="Location">{company.location}</td>
              <td data-label="Package">{company.package1}</td>
              <td data-label="Profile">{company.profile}</td>
              <td data-label="No of candidates required">{company.numberOfCandidates}</td>
              {/* <td data-label="Apply form">
                <a href="/jobApplication" className={CompanyCSS.btn}>
                  Apply Now
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default Company;


// import React, { useState, useEffect } from "react";

// function Company() {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     try {
//       const response = await fetch("http://localhost:9090/api/companys/");
//       const data = await response.json();
//       setCompanies(data);
//     } catch (error) {
//       console.log("Error fetching companies:", error);
//     }
//   };

//   const styles = {
//     companyBody: {
//       width: '100%',
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       backgroundImage:
//         'url("https://img.freepik.com/free-photo/we-are-hiring-concept_23-2150902117.jpg?t=st=1710531599~exp=1710532199~hmac=4ccebec0de832f3adef3e73521d7a0b66d477d9b30c433cde636e5b21efca9a9")',
//       animation: 'animate 12s linear infinite',
//       padding: '50px',
//     },
//     heading: {
//       fontSize: '30px',
//       textAlign: 'center',
//       color: '#f1f1f1',
//       padding: '17px',
//       background: 'brown',
//       marginBottom: '70px',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//     },
//     tableContainer: {
//       padding: '0 10px',
//       marginTop: '10em',
//       marginBottom: '36em',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//     tableStyles: {
//       width: '100%',
//       borderCollapse: 'collapse',
//     },
//     tableStylesAdditional: {
//       tableLayout: 'fixed',
//     },
//   };

//   return (
//     <div style={styles.companyBody}>
//       <h1 style={styles.heading}>Company Details</h1>
//       <div style={styles.tableContainer}>
//         <div
//           style={{
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <table
//             style={{
//               ...styles.tableStyles,
//               ...styles.tableStylesAdditional,
//               backgroundColor: '#ee2828', // Inline styling for header colors
//             }}
//           >
//             <thead>
//               <tr>
//                 <th>Sl. No</th>
//                 <th>Company Name</th>
//                 <th>Location</th>
//                 <th>Package</th>
//                 <th>Profile</th>
//                 <th>No of candidates required</th>
//               </tr>
//             </thead>
//             <tbody>
//               {companies.map((company, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}.</td>
//                   <td>{company.companyName}</td>
//                   <td>{company.location}</td>
//                   <td>{company.package1}</td>
//                   <td>{company.profile}</td>
//                   <td>{company.numberOfCandidates}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Company;
