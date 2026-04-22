import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportViewer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/report/files");
      setFiles(res.data);
    } catch (err) {
      console.error("Error fetching files", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uploaded Reports</h2>

      {files.length === 0 ? (
        <p>No reports uploaded yet</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a
                href={`http://localhost:9090/uploads/${file}`}
                target="_blank"
                rel="noreferrer"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportViewer;