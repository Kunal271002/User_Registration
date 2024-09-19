import React, { useEffect, useState } from "react";
import { Form, Input, Button, Drawer, Space, Table } from "antd";
import axios from "axios";
import UpdateForm from "../CrudTable/UpdateForm";
import AddForm from "../CrudTable/AddForm";
import "../CrudTable/CrudTable.css";

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
      title: "Is Active",
      dataIndex: "isactive",
      key: "isactive",
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
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const [ApiData, setApiData] = useState([]);
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);
  const [updateDrawerOpen, setUpdateDrawerOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showAddDrawer = () => {
    setAddDrawerOpen(true);
  };
  const showUpdateDrawer = (record) => {
    setSelectedRecord(record); // Store the selected record for update
    setUpdateDrawerOpen(true);
  };

  const closeAddDrawer = () => {
    setAddDrawerOpen(false);
  };

  const closeUpdateDrawer = () => {
    setUpdateDrawerOpen(false);
    setSelectedRecord(null); // Clear the selected record after closing the drawer
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

  const handleDelete = async (Deleteid) => {
    try {
      const response = await axios.post(
        "https://localhost:44371/api/Students/DeleteByID",
        { id: Deleteid }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {/* Add Drawer */}
      <Drawer title="Add Form" onClose={closeAddDrawer} open={addDrawerOpen}>
        <AddForm />
      </Drawer>

      {/* Update Drawer */}
      <Drawer
        title="Update Form"
        onClose={closeUpdateDrawer}
        open={updateDrawerOpen}
      >
        <UpdateForm record={selectedRecord} />
      </Drawer>

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
