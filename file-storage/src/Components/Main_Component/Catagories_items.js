import React, { useState, useContext, useEffect } from "react";
import { contextApiData } from "../../App";
import axios from "axios";
import "../../Styles/Catgories.scss";

export default function Catagories() {
  const {
    Category,
    File,
    FileDataupdated,
    CategoryDataupdated,
    setFileDataupdated,
    setCategoryDataupdated,
  } = useContext(contextApiData);

  const [catgoriesData, setcatgoriesData] = useState({});
  const [FileData, setFileData] = useState(null);
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
    const l = {};
    const fetchData = await axios.get(File);
    const datas = fetchData.data;
    // console.log(datas.length);
    // console.log(datas[0]);
    // console.log(datas[1]);
    // const l2={}
    for (let i = 0; i < datas.length; i++) {
      var ashish = [];

      var file = datas[i];
      ashish.push(file.Name);
      ashish.push("Label1");
      ashish.push(file.Type);
      ashish.push(file.ModifietAt);
      ashish.push(file.file);
      ashish.push(file.Owner);

      l[i] = ashish;
    }

    setFileData(l);
  }

  useEffect(() => {
    if (FileDataupdated) {
      fetchFileData();
    }
    if (CategoryDataupdated) {
      fetchCatagoriesData();
    }
  }, [CategoryDataupdated, FileDataupdated]);

  function handelClick() {}

  function DataConvertion(dataString) {
    const dateString = dataString;
    const date = new Date(dateString);

    const options = {
      day: "numeric",
      month: "short",
      year: "2-digit",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    const formattedDateWithOrdinal = formattedDate.replace(
      /\d+(st|nd|rd|th)/,
      (match) => match.toUpperCase()
    );

    return formattedDateWithOrdinal;
  }

  console.log(FileData);

  function AllItems() {
    console.log(FileData);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col"> NAME </th>
              <th scope="col"> OWNER</th>
              <th scope="col"> LABELS</th>
              <th scope="col"> TYPE</th>
              <th scope="col">MODIFIED</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
        </table>
      </div>
    );
    //   <div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th scope="col">
    //             <input type="checkbox" />
    //           </th>
    //           <th scope="col">Name</th>
    //           <th scope="col">OWNER</th>
    //           <th scope="col">LABELS</th>
    //           <th scope="col">TYPE</th>
    //           <th scope="col">MODIFIED</th>
    //           <th scope="col">ACTION</th>
    //         </tr>
    //       </thead>
    //     </table>
    //   </div>
    // );
    //     <div>
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th scope="col">
    //             <input type="checkbox" />
    //           </th>
    //           <th scope="col">Name</th>
    //           <th scope="col">OWNER</th>
    //           <th scope="col">LABELS</th>
    //           <th scope="col">TYPE</th>
    //           <th scope="col">MODIFIED</th>
    //           <th scope="col">ACTION</th>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {Object.keys(FileData).map((values) => {
    //           FileData[values].forEach((items, value, arr) => {
    //             <tr>
    //               <td>
    //                 <input type="checkbox" />
    //               </td>
    //               <td>{items.Name}</td>
    //               <td>{items.Name}</td>
    //               <td>{items.Name}</td>
    //               <td>{items.Name}</td>
    //               <td>{items.Name}</td>
    //               <td>{items.Name}</td>
    //             </tr>;
    //           });
    //         })}

    //         {/* {Object.keys(FileData).map((values) => {
    //           return FileData[values].map((items) => (
    //             <tr>
    //               <td>
    //                 <input type="checkBox" value={items} key={items} />
    //               </td>
    //               <td>
    //                 <img
    //                   width="5%"
    //                   height="5%"
    //                   src={items.file}
    //                   alt="Name"
    //                 />
    //                 <label>
    //                   {items.Name.substring(0, items.Name.lastIndexOf("."))}
    //                 </label>
    //               </td>
    //               <td>
    //                 <img
    //                   src={items.Owner}
    //                   width="5%"
    //                   height="5%"
    //                   alt="owner"
    //                 />
    //               </td>
    //               <td>Label1</td>
    //               <td>
    //                 {items.Name.substring(items.Name.lastIndexOf(".") + 1)}
    //               </td>
    //               <td>{DataConvertion(items.ModifietAt)}</td>
    //               <td>
    //                 <i
    //                   className="fa fa-pencil-square-o"
    //                   aria-hidden="true"
    //                 ></i>
    //                 <i className="fa fa-trash" aria-hidden="true"></i>
    //               </td>
    //             </tr>
    //           ));
    //         })} */}
    //       </tbody>
    //     </table>
    //   </div>
    // )
  }

  return (
    <div className="CatagoriesContainer">
      <div>
        {CategoryDataupdated ? (
          <div>
            <h4>CATEGORIES</h4>
            {Object.keys(catgoriesData).map((category) => (
              <div key={category}>
                <p>{category}</p>
                <ul style={{ "list-style-type": "none" }}>
                  {catgoriesData[category].map((item, index) => (
                    <li key={item}>
                      <input
                        type="checkbox"
                        id={index}
                        value={item}
                        onClick={handelClick}
                      />{" "}
                      <label>{item}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>{FileDataupdated ? AllItems() : null}</div>
    </div>
  );
}
