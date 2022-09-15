import "./upload.scss";
import { useState } from "react";
import axios from "axios";

export function Upload() {
  const [csv, setCsv] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", csv);
    try {
      const response = await axios({
        method: "post",
        url: "/api/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    // const res = await axios.get('/api/');
    // console.log(res.data);
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
