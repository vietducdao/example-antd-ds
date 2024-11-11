// import React, { useContext, useEffect } from "react";
// import { Form, Input, Button } from "antd";
// import { UserContext } from "./store/UserContext";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// interface AddPersonFormProps {
//   onFinish: (values: DataType) => void;
//   onCancel: () => void;
//   itemUpdate: DataType | null;
// }

// const FormAdd: React.FC<AddPersonFormProps> = ({
//   onFinish,
//   onCancel,
//   itemUpdate,
// }) => {
//   const [form] = Form.useForm();
//   const { addUser } = useContext(UserContext) || { addUser: () => {} };

//   useEffect(() => {
//     if (itemUpdate) {
//       form.setFieldsValue(itemUpdate);
//     }
//   }, [itemUpdate, form]);

//   const onSubmit = (values: DataType) => {
//     const newUser = { ...values, key: new Date().toISOString() };

//     if (itemUpdate) {
//     } else {
//       addUser(newUser);
//       onFinish(newUser);
//     }
//   };

//   return (
//     <Form form={form} layout="vertical" onFinish={onSubmit}>
//       <Form.Item
//         name="name"
//         label="Name"
//         rules={[{ required: true, message: "Please input the name!" }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="age"
//         label="Age"
//         rules={[{ required: true, message: "Please input the age!" }]}
//       >
//         <Input type="number" />
//       </Form.Item>
//       <Form.Item
//         name="address"
//         label="Address"
//         rules={[{ required: true, message: "Please input the address!" }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           {itemUpdate ? "Update" : "Add User"}
//         </Button>
//         <Button onClick={onCancel} style={{ marginLeft: "8px" }}>
//           Cancel
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default FormAdd;
// Ở cuối mỗi file, thêm:
export {};
