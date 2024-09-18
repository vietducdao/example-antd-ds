import React, { useState } from "react";
import Columns from "./columns";
import FormAdd from "./FormAdd";

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

  const handleAdd = (values: DataType) => {
    const newData = [...data, { ...values, key: (data.length + 1).toString() }];
    setData(newData);
    console.log("Người mới đã được thêm:", values);
  };

  const handleCancel = () => {
    console.log("Form đã được hủy");
  };

  const handleDelete = (key: string) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
    console.log("Người đã được xóa:", key);
  };

  return (
    <div className="App">
      <Columns data={data} handleDelete={handleDelete} />
      <FormAdd onFinish={handleAdd} onCancel={handleCancel} />
    </div>
  );
};

export default App;
