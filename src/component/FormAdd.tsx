import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { adduser } from "../pages/addUser/SliceUser";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface AddPersonFormProps {
  onFinish: (values: DataType) => void;
  onCancel: () => void;
  onUpdate?: (values: DataType) => void;
  itemUpdate: DataType | null;
}

const FormAdd: React.FC<AddPersonFormProps> = ({
  onFinish,
  onCancel,
  itemUpdate,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onSubmit = (values: DataType) => {
    if (!itemUpdate) {
      const newUser = { ...values, key: new Date().toISOString() };
      dispatch(adduser(newUser)); // addUser từ store
      onFinish(newUser);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
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
          {itemUpdate ? "Update" : "Add User"}
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: "8px" }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormAdd;
