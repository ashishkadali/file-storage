import React, { useContext } from "react";
import "../../Styles/DailogBox.scss";
import { contextApiData } from "../../App";

export default function DailogBox(props) {
  const { setCategory, setFile } = useContext(contextApiData);

  return (
    <div>
      <div className="modalWrapper" onClick={props.closeModel}></div>
      <div className="modalContainer">
        <h4>Category API and File API Links</h4>
        <p>Category API Link</p>
        <input
          className="category"
          type="text"
          placeholder="Category API"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <p className="fileText">File API Link</p>
        <input
          className="file"
          type="text"
          placeholder="File API"
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
        <br></br>

        <button
          className="submitButton "
          class="btn btn-primary"
          type="button"
          onClick={props.closeModel}
        >
          Submit
        </button>

        <button
          style={{
            marginLeft: "1rem",
          }}
          className="cancelButton "
          class="btn btn-primary"
          type="button"
          onClick={props.closeModel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
