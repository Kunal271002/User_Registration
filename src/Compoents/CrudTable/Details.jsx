import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Drawer, Space, Table } from "antd";

export default function Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Is Active",
      dataIndex: "isactive",
      key: "isactive",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Created-Date",
      dataIndex: "createdate",
      key: "createdate",
    },
    
  ];

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://localhost:44371/api/Students/GetById",
        { id } // Send 'id' as an object
      );
      setData(response.data.data); // Adjust based on the actual structure of your response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function inside useEffect
  }, [id]); // Include 'id' in the dependency array

  return (
    <div>
      <h1>Student Details</h1>
      {data ? (
        <div>
          {/* <p>{JSON.stringify(data)}</p>{" "} */}
          <Table columns={columns} />
          dataSource={JSON.stringify(data)} 
          {/* Display the data; adjust based on structure */}
        </div>
      ) : (
        <p>Loading...</p> // Show a loading indicator while fetching data
      )}
    </div>
  );
}
