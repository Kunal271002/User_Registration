import React from "react";
import { Input } from "antd";
import { Button, Flex, Form } from "antd";
import { FormProps } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import axios from "axios";
function From() {
  const [userGuiId, setuserGuiId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [loginId, setloginId] = useState("");
  const [usertype, setusertype] = useState(0);
  const [status, setstatus] = useState("");
  const [password, setpassword] = useState("");
  const [authenticationType, setauthenticationType] = useState(0);
  const [defaultRoleID, setdefaultRoleID] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44371/api/User/AddUserMaster",
        {
          userGuiId,
          firstName,
          lastName,
          emailId,
          loginId,
          userGuiId,
          usertype,
          status,
          password,
          authenticationType,
          defaultRoleID,
        }
      );
      console.log(response)
    //   if (response.data.message == "Successful") {
    //     alert("Successful");
    //     window.location.reload();
    //   }

    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container my-3">
      <h3>Submit User Details</h3>
      <Form>
        <Form.Item
          layout="userGuiId"
          label="User Id"
          name="userGuiId"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setuserGuiId(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="firstName"
          label="First Name"
          name="firstName"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setfirstName(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="lastName"
          label="Last Name"
          name="lastName"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setlastName(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="emailId"
          label="E-Mail"
          name="emailId"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setemailId(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="loginId"
          label="Login-Id"
          name="loginId"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setloginId(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="usertype"
          label="User Type"
          name="usertype"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setusertype(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="status"
          label="Status"
          name="status"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setstatus(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="password"
          label="Password"
          name="password"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setpassword(event.target.value)} />
        </Form.Item>
        <Form.Item
          layout="authenticationType"
          label="Authentication Type"
          name="authenticationType"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input
            onChange={(event) => setauthenticationType(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          layout="defaultRoleID"
          label="Default Role Id"
          name="defaultRoleID"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="my-3"
        >
          <Input onChange={(event) => setdefaultRoleID(event.target.value)} />
        </Form.Item>
        <button
          className="btn btn-success"
          type="submit"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </Form>
    </div>
  );
}

export default From;
