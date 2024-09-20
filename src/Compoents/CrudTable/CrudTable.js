import React, { useEffect, useState } from "react";
import { Form, Input, Button, Drawer, Space, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import AddForm from "../CrudTable/AddForm";
import { useNavigate } from "react-router-dom";
import "../CrudTable/CrudTable.css";
import Details from "./Details";

const CrudTable = () => {
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div size="middle">
          <button
            className="btn btn-success mx-3"
            onClick={() => showUpdateDrawer(record)}
          >
            <Link to={`/Details/${record.id}`}>Details</Link>
          </button>
        </div>
      ),
    },
  ];

  const [ApiData, setApiData] = useState([]);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);
  const [updateDrawerOpen, setUpdateDrawerOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [id, newId] = useState();
  const navigate = useNavigate();
  const showAddDrawer = () => {
    setAddDrawerOpen(true);
  };
  const showUpdateDrawer = (record) => {
    setSelectedRecord(record); // Store the selected record for update

    console.log(id);
    newId(record.id);
  };

  const closeAddDrawer = () => {
    setAddDrawerOpen(false);
  };

  const closeUpdateDrawer = () => {
    setUpdateDrawerOpen(false);
    setSelectedRecord(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:44371/api/Students/GetAllStudents"
        );
   
        setApiData(response.data.data);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Add Drawer */}
      <Drawer title="Add Form" onClose={closeAddDrawer} open={addDrawerOpen}>
        <AddForm />
      </Drawer>

      {/* Update Drawer */}
      <Button type="primary my-3" onClick={showAddDrawer}>
        Add
      </Button>

      <div className="">
        <Table columns={columns} dataSource={ApiData} />
      </div>
    </div>
  );
};

export default CrudTable;
