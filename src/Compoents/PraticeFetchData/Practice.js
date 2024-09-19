import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AddForm from "../CrudTable/AddForm";
function Practice() {
  const [jsonData, SetjsonData] = useState([]);
  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      SetjsonData(response.data);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AddForm/>
    </div>
  );
}

export default Practice;
