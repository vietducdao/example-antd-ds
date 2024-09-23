import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

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
  itemUpdate?: DataType | null;
}

const FormAdd: React.FC<AddPersonFormProps> = ({
  onFinish,
  onCancel,
  onUpdate,
  itemUpdate,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (itemUpdate) {
      form.setFieldsValue(itemUpdate);
    } else {
      form.resetFields();
    }
  }, [itemUpdate, form]);

  const handleSubmit = (values: DataType) => {
    if (itemUpdate) {
      if (onUpdate) {
        onUpdate({ ...values, key: itemUpdate.key });
      }
    } else {
      onFinish(values);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
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
        <Button type="primary" htmlType="submit" style={{ marginLeft: "8px" }}>
          {itemUpdate ? "Update" : "Submit"}
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: "8px" }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormAdd;
