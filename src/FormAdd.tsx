import React from "react";
import { Form, Input, Button } from "antd";

interface AddPersonFormProps {
  onFinish: (values: any) => void;
  onCancel: () => void;
}

const Add: React.FC<AddPersonFormProps> = ({ onFinish, onCancel }) => {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ name: "", age: "", address: "" }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, message: "Please input the age!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input the address!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: "8px" }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Add;
