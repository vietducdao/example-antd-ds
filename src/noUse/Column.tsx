// import React, { useState, useContext } from "react";
// import Columns from "./Columns";
// import TextField from "../component/TextField";
// import { Button, Flex } from "antd";
// import { useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "./store/UserContext";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const ColumnsPage: React.FC = () => {
//   const { users, addUser, deleteUser, updateUser } = useContext(
//     UserContext
//   ) || {
//     users: [],
//     addUser: () => {},
//     deleteUser: () => {},
//     updateUser: () => {},
//   };

//   const [search, setSearch] = useState<string>("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const data: DataType[] = users; // Sử dụng dữ liệu người dùng từ context

//   React.useEffect(() => {
//     if (location.state && location.state.newUser) {
//       const newUser = location.state.newUser as DataType;
//       addUser(newUser); // Thêm người dùng mới vào context
//     }
//   }, [location.state, addUser]);

//   const handleSearchChange = (value: string) => {
//     setSearch(value);
//   };

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleDelete = (key: string) => {
//     deleteUser(key); // Xóa người dùng từ context
//   };

//   const handleUpdate = (itemUpdate: DataType) => {
//     updateUser(itemUpdate); // Cập nhật người dùng trong context
//   };

//   const clickButton = () => {
//     navigate("/form");
//   };

//   return (
//     <div className="ColumnsPage">
//       <h1>Danh sách người dùng</h1>
//       <Flex justify="space-between">
//         <TextField
//           placeholder="Tìm kiếm theo tên"
//           value={search}
//           onChange={handleSearchChange}
//           width="250px"
//         />
//         <Button onClick={clickButton}>Thêm Mới</Button>
//       </Flex>

//       <Columns
//         data={filteredData}
//         handleDelete={handleDelete}
//         handleUpdate={handleUpdate}
//       />
//     </div>
//   );
// };

// export default ColumnsPage;
// Ở cuối mỗi file, thêm:
export {};
