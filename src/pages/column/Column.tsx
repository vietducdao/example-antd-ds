import React, { useState } from "react";
import Columns from "../../component/Columns";
import TextField from "../../component/TextField";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ColumnsPage: React.FC = () => {
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

  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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
  };

  const clickButton = () => {
    navigate("/form");
  };

  return (
    <div className="ColumnsPage">
      <h1>Danh sách người dùng</h1>
      <Flex justify="space-between">
        <TextField
          placeholder="Tìm kiếm theo tên"
          value={search}
          onChange={handleSearchChange}
          width="250px"
        />
        <Button onClick={clickButton}>Thêm Mới</Button>
      </Flex>

      <Columns
        data={filteredData}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default ColumnsPage;
