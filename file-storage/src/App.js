import React, { createContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header_component/Header";
import Main from "./Components/Main_Component/Main";

export const contextApiData = createContext();

export default function App() {
  const [Category, setCategory] = useState("");
  const [File, setFile] = useState("");
  const [FileDataupdated, setFileDataupdated] = useState(false);
  const [CategoryDataupdated, setCategoryDataupdated] = useState(false);

  return (
    <div>
      <contextApiData.Provider
        value={{
          Category,
          File,
          setCategory,
          setFile,
          FileDataupdated,
          setFileDataupdated,
          CategoryDataupdated,
          setCategoryDataupdated,
        }}
      >
        <Header />
        <Main />
      </contextApiData.Provider>
    </div>
  );
}
