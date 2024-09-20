import React, { useEffect } from "react";
import { Input } from "antd";
import { Form } from "antd";
import { useState } from "react";
import axios from "axios";
import "../PraticeFetchData/DesignForm.css";
import logo from "../../Assets/490748-PH5A0U-472.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const rezexUserID = "[w-]+";
  const rezexFirstName = "[A-Za-z]+";
  const rezexLastName = "[A-Za-z]+";
  const rezexEmail = "[w.-]+@[w.-]+";
  const rezexlogin = "[w]+";
  const rezexUserType = "d";
  const rezexStatus = "d";
  const rezexPassword = "hashedpasswordd+";
  const rezexAuthenticateType = "d";
  const rezexDefaultRoleId = "d";

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
      if (response.data.message == "Successful") {
        Swal.fire({
          icon: "success",
          title: "User Resistered",
          text: "Sucessful",
        });
        navigate("/CrudTable");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      navigate("/");
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("");
      } catch (error) {}
    };
  }, []);

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
                        rules={[
                          {
                            required: true,
                            message: "Please input your UserID!",
                          },
                          {
                            pattern: "[w-]+",
                            message:
                              "For Eg: dcba4321-0987-65ef-ba98-0987654321ef",
                          },
                        ]}
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
                        rules={[
                          {
                            required: true,
                            message: "Please input your First Name!",
                          },
                          {
                            pattern: "[A-Za-z]+",
                            message: "For Eg: Jane",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        className="my-3"
                      >
                        <Input
                          onChange={(event) => {
                            const isValidfirstName = rezexFirstName.text(
                              event.target.value
                            );
                            if (isValidfirstName == true) {
                              setfirstName(event.target.value);
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        layout="lastName"
                        label="Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Smith!",
                          },
                          {
                            pattern: "[A-Za-z]+",
                            message:
                              "For Eg: dcba4321-0987-65ef-ba98-0987654321ef",
                          },
                        ]}
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
                        rules={[
                          {
                            required: true,
                            message: "Please input your E-MailId!",
                          },
                          {
                            pattern: "[w.-]+@[w.-]+",
                            message: "For Eg: jane.smith@gmail.com",
                          },
                        ]}
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
                        rules={[
                          {
                            required: true,
                            message: "Please input your LoginId",
                          },
                          {
                            pattern: "[w]+",
                            message: "For Eg: jsmith",
                          },
                        ]}
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
                          rules={[
                            {
                              required: true,
                              message: "Please input your Usertype",
                            },
                            {
                              pattern: "d",
                              message: "For Eg: 1",
                            },
                          ]}
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
                          rules={[
                            {
                              required: true,
                              message: "Please input your Status",
                            },
                            {
                              pattern: "d",
                              message: "For Eg: 2",
                            },
                          ]}
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
                          rules={[
                            {
                              required: true,
                              message: "Please input your Passwrod!",
                            },
                            {
                              pattern: "hashedpasswordd+",
                            },
                          ]}
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
                          rules={[
                            {
                              required: true,
                              message: "Please input your Authentication Type",
                            },
                            {
                              pattern: "d",
                              message: "For Eg: 1",
                            },
                          ]}
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
                          rules={[
                            {
                              required: true,
                              message: "Please input your Default Role ID",
                            },
                            {
                              pattern: "d",
                              message: "For Eg: User or Posp",
                            },
                          ]}
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
// const [errors, setErrors] = useState({
//   email: '',
//   pincode: '',
//   mobile: '',
// });

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const pincodeRegex = /^\d{6}$/;
// const mobileRegex = /^\d{10}$/;

// function handleInputChange(event) {
//   const { name, value } = event.target;

//   // Update form data
//   setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//   }));

//   // Validate email if the input name is 'email'
//   if (name === 'email') {
//       const isValidEmail = emailRegex.test(value);
//       setErrors(prevErrors => ({
//           ...prevErrors,
//           email: isValidEmail ? '' : 'Email is not valid'
//       }));
//       setPersonalInfoError(!isValidEmail); // Update personalInfoError based on email validity
//   }
//   if (name === 'pincode') {
//       const isValidPincode = pincodeRegex.test(value);
//       setErrors(prevErrors => ({
//           ...prevErrors,
//           pincode: isValidPincode ? '' : 'Pincode is not valid'
//       }));
//       setPersonalInfoError(!isValidPincode); // Update personalInfoError based on pincode validity
//   }
//   if (name === 'number') {
//       const isValidMobile = mobileRegex.test(value);
//       setErrors(prevErrors => ({
//           ...prevErrors,
//           mobile: isValidMobile ? '' : 'Mobile number is not valid'
//       }));
//       setPersonalInfoError(!isValidMobile); // Update personalInfoError based on mobile number validity
//   }
// }
