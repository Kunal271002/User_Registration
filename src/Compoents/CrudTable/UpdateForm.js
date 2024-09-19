import React from "react";
import { Form, Input } from "antd";
const UpdateForm = () => (
  <>
    <Form>
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
        <Input />
      </Form.Item>
      <Form.Item
        layout="email"
        label="E-mail"
        name="email"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input />
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
        <Input />
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
        <Input />
      </Form.Item>
      <button className="btn btn-success">Submit</button>
    </Form>
  </>
);
export default UpdateForm;
