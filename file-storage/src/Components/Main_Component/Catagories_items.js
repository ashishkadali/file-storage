import React, { useState, useContext, useEffect } from "react";
import { contextApiData } from "../../App";
import axios from "axios";

export default function Catagories() {
  const { Category, File } = useContext(contextApiData);

  const [catgoriesData, setcatgoriesData] = useState({});
  const [FileData, setFileData] = useState([]);

  useEffect(() => {
    async function fetchCatagoriesData() {
      const fetchData = await axios.get(Category);

      const data = fetchData.data;

      data.map((value) => {
        const lists = [];
        const categorys = value.Name;

        value.Labels.map((insideName) => {
          lists.push(insideName.Name);
        });
        setcatgoriesData((prevData) => ({
          ...prevData,
          [categorys]: lists,
        }));
      });
    }

    async function fetchFileData() {
      const fetchData = await axios.get(File);
      // console.log(fetchData.data);
    }

    if (Category) {
      fetchCatagoriesData();
      fetchFileData();
    }

    console.log(catgoriesData);
  }, []);

  return (
    <div>
      <div>
        <p>fuck</p>
        {/* console.log(catgoriesData); */}
        {console.log(catgoriesData)}
      </div>
      <div></div>
    </div>
  );
}
