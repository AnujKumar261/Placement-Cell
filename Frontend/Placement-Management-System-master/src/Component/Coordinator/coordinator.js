import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        backgroundImage: "url(https://27007771.fs1.hubspotusercontent-eu1.net/hubfs/27007771/Blog/gg-blogpost-The%20Future%20of%20Recruitment%20-%206%20Ways%20to%20Digitise%20The%20Recruitment%20Process.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "animate 5s linear infinite",
        position: "relative",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "5rem",
          backgroundColor:"#59769c",
          color: "black",
          letterSpacing: "2px",
        }}
      >
        Co-Ordinator
      </h1>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div style={{ flex: "0 0 45%", marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
              }}
            >
              <img
                src="https://www.statefarmfcu.com/wp-content/uploads/2021/10/Set-Up-Alerts.jpg"
                alt="Add Notification"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h5
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                  }}
                >
                  Add the notification
                </h5>
                <Link
                  to="/notification"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#007bff")
                  }
                >
                  Add Notification
                </Link>
              </div>
            </div>
          </div>

          <div style={{ flex: "0 0 45%", marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
              }}
            >
              <img
                src="https://www.rpsgroup.com/imported-media/2021/1_istock-858705938_1600x1000.jpg"
                alt="View Company Details"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h5
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                  }}
                >
                  View the company details
                </h5>
                <Link
                  to="/company"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#218838")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#28a745")
                  }
                >
                  Company Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 45%", marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
              }}
            >
              <img
                src="https://www.finereport.com/en/wp-content/uploads/2019/11/2019112801I.jpg"
                alt="Generate Report"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h5
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                  }}
                >
                  Generate report & send to Admin
                </h5>
                <Link
                  to="/generatereport"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#ffc107",
                    color: "#333",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#e0a800")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#ffc107")
                  }
                >
                  Generate Report
                </Link>
              </div>
            </div>
          </div>

          <div style={{ flex: "0 0 45%", marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
              }}
            >
              <img
                src="https://contentstatic.techgig.com/photo/74829871.cms"
                alt="Manage Student Database"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h5
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#333",
                  }}
                >
                  Manage & Filter the student database
                </h5>
                <Link
                  to="/studentdatabase"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  Student Database
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
