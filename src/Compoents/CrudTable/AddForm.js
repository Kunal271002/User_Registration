import React from "react";
import { Form, Input } from "antd";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";


const AddForm = () => {

  const [inputs, setInputs] = useState({
    PhoneNumber: "",
    email: "",
    age: "",
    address: "",
    isactive:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    
    try {
      const response = await axios.post(
        "https://localhost:44371/api/Students/AddNewEntryStudents",
        inputs
      );
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          layout="PhoneNumber"
          label="Phone Number"
          name="PhoneNumber"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input
            type="text"
            name="phoneNumber"
            value={inputs.PhoneNumber || ""}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          layout="email"
          label="E-mail"
          name="email"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          layout="age"
          label="Age"
          name="age"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          layout="address"
          label="Address"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          layout="address"
          label="Is Active"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </Form.Item>
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Form>
    </>
  );
};
export default AddForm;
