// import React, { useState, useContext } from "react";
// import { Button, ConfigProvider, Space, theme, Typography } from "antd";
// import FormAdd from "../../component/FormAdd";
// import Columns from "../../component/Columns";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../store/UserContext";
// import { useTheme } from "../store/ThemeContext";
// import "../../style/App.css";

// const { Title } = Typography;

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const FormAddPage: React.FC = () => {
//   const [editingData, setEditingData] = useState<DataType | null>(null);
//   const navigate = useNavigate();
//   const { users, addUser, deleteUser } = useContext(UserContext) || {
//     users: [],
//     addUser: () => {},
//     deleteUser: () => {},
//   };

//   const { isDark, toggleTheme } = useTheme();

//   const handleAddUser = (newUser: DataType) => {
//     console.log("User added:", newUser);
//     addUser({
//       ...newUser,
//       tags: newUser.tags || [],
//       key: Math.random().toString(),
//     });
//     setEditingData(null);
//     navigate("/column");
//   };

//   const handleCancel = () => {
//     setEditingData(null);
//   };

//   const handleEditUser = (user: DataType) => {
//     setEditingData(user);
//   };

//   const handleDeleteUser = (key: string) => {
//     console.log("Delete user with key:", key);
//     deleteUser(key);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
//       }}
//     >
//       <div className={isDark ? "dark" : "light"}>
//         <Space direction="vertical" size="large" style={{ width: "100%" }}>
//           <Title level={2}>{editingData ? "Edit User" : "Add User"}</Title>
//           <Button onClick={toggleTheme}>
//             setTheme
//             {isDark ? "Light" : "Dark"}
//           </Button>
//           <h1 className="text-3xl font-bold underline">Hello world!</h1>
//           <FormAdd
//             onFinish={handleAddUser}
//             onCancel={handleCancel}
//             itemUpdate={editingData}
//           />

//           <Columns
//             data={users}
//             handleDelete={handleDeleteUser}
//             handleUpdate={handleEditUser}
//           />
//         </Space>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default FormAddPage;
// Ở cuối mỗi file, thêm:
export {};
