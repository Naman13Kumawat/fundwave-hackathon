import "./upload.scss";
import { useState } from "react";
import axios from "axios";

export function Upload() {
  const [csv, setCsv] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("csv", csv);
    try {
      const response = await axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (e) => {
    setCsv(e.target.files[0]);
  };
  return (
    <div>
      <h1 className="title">Upload your CSV file here:</h1>
      <div className="upload-container">
        <form action="" className="upload" onSubmit={handleSubmit}>
          <input
            type="file"
            className="uploadCSV"
            onChange={handleFileSelect}
          />
          <button className="upload-btn">Upload</button>
        </form>
      </div>
    </div>
  );
}
