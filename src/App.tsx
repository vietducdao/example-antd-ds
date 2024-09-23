import React, { useState } from "react";
import Columns from "./columns";
import FormAdd from "./FormAdd";
import TextField from "./TextField";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);

  const [editingData, setEditingData] = useState<DataType | null>(null);
  const [search, setSearch] = useState("");

  const AddUser = (newUser: DataType) => {
    const newData = [
      ...data,
      { ...newUser, key: (data.length + 1).toString() },
    ];
    setData(newData);
    setEditingData(null);
  };

  const handleCancel = () => {
    setEditingData(null);
  };

  const handleDelete = (key: string) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleUpdate = (itemUpdate: DataType) => {
    const index = data.findIndex((item) => item.key === itemUpdate.key);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = { ...itemUpdate };
      setData(newData);
    }
    setEditingData(null);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Quản lý người dùng</h1>

      <TextField
        placeholder="Tìm kiếm theo tên"
        value={search}
        onChange={handleSearchChange}
        width="250px"
      />

      <Columns
        data={filteredData}
        handleDelete={handleDelete}
        handleUpdate={setEditingData}
      />

      <FormAdd
        onFinish={AddUser}
        onCancel={handleCancel}
        onUpdate={handleUpdate}
        itemUpdate={editingData}
      />
    </div>
  );
};

export default App;
