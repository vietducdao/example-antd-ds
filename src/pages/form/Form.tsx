import React, { useState } from "react";
import FormAdd from "../../component/FormAdd";
import { useDispatch, useSelector } from "react-redux";
import { adduser, deleteuser } from "../addUser/SliceUser";
import Columns from "../../component/Columns";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const FormAddPage: React.FC = () => {
  const [editingData, setEditingData] = useState<DataType | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state: any) => state.users.users) || [];

  const addUser = (newUser: DataType) => {
    console.log("User added:", newUser);
    dispatch(
      adduser({
        ...newUser,
        tags: newUser.tags || [],
        key: Math.random().toString(),
      })
    );
    setEditingData(null);
    navigate("/column");
  };

  const handleCancel = () => {
    setEditingData(null);
  };

  const handleEditUser = (user: DataType) => {
    setEditingData(user);
  };

  const handleDeleteUser = (key: string) => {
    console.log("Delete user with key:", key);
    dispatch(deleteuser(key));
  };

  return (
    <div>
      <h1>{editingData ? "Edit User" : "Add User"}</h1>
      <FormAdd
        onFinish={addUser}
        onCancel={handleCancel}
        itemUpdate={editingData}
      />
      <Columns
        data={users}
        handleDelete={handleDeleteUser}
        handleUpdate={handleEditUser}
      />
    </div>
  );
};

export default FormAddPage;
