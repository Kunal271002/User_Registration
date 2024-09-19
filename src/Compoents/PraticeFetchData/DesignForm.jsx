import React from "react";
import { Card, Input } from "antd";
import { Button, Flex, Form } from "antd";
import { FormProps } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import axios from "axios";
import "../PraticeFetchData/DesignForm.css";
import logo from "../../Assets/490748-PH5A0U-472.jpg";
function DesignForm() {
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
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <div>
        <div className="">
          <div className="my-3">
            <div className="container CardShadowForm">
              <div className="my-4">
                <div className="Registration_padding">
                  <h1>User Registration</h1>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Form
                      name="layout-multiple-horizontal"
                      layout="horizontal"
                      labelCol={{
                        span: 4,
                      }}
                      wrapperCol={{
                        span: 20,
                      }}
                    >
                      <Form.Item
                        layout="userGuiId"
                        label="User Id"
                        name="userGuiId"
                        rules={[{ required: true }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        className="my-3"
                      >
                        <Input
                          onChange={(event) => setuserGuiId(event.target.value)}
                        />
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
                        <Input
                          onChange={(event) => setfirstName(event.target.value)}
                        />
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
                        <Input
                          onChange={(event) => setlastName(event.target.value)}
                        />
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
                        <Input
                          onChange={(event) => setemailId(event.target.value)}
                        />
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
                        <Input
                          onChange={(event) => setloginId(event.target.value)}
                        />
                      </Form.Item>
                    </Form>
                  </div>
                  <div className="col-4">
                    <h1>
                      <Form
                        name="layout-multiple-horizontal"
                        layout="horizontal"
                        labelCol={{
                          span: 4,
                        }}
                        wrapperCol={{
                          span: 20,
                        }}
                      >
                        <Form.Item
                          layout="usertype"
                          label="User Type"
                          name="usertype"
                          rules={[{ required: true }]}
                          labelCol={{ span: 24 }}
                          wrapperCol={{ span: 24 }}
                          className="my-3"
                        >
                          <Input
                            onChange={(event) =>
                              setusertype(event.target.value)
                            }
                          />
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
                          <Input
                            onChange={(event) => setstatus(event.target.value)}
                          />
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
                          <Input
                            onChange={(event) =>
                              setpassword(event.target.value)
                            }
                          />
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
                            onChange={(event) =>
                              setauthenticationType(event.target.value)
                            }
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
                          <Input
                            onChange={(event) =>
                              setdefaultRoleID(event.target.value)
                            }
                          />
                        </Form.Item>
                      </Form>
                    </h1>
                  </div>
                  <div className="col-4">
                    <img
                      src={logo}
                      alt="registraction"
                      width="585px"
                      height="446px"
                      className="d-inline-block align-top img-fluid"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary my-3"
                      type="submit"
                      onClick={handlesubmit}
                    >
                      <h5> Submit</h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignForm;
