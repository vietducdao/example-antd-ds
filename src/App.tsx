import React, { useState } from "react";
import Columns from "./columns";
import FormAdd from "./FormAdd";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const handleAdd = (values: any) => {
    const newData = [...data, { ...values, key: data.length + 1 }];
    setData(newData);
    console.log("Người mới đã được thêm:", values);
  };

  const handleCancel = () => {
    console.log("Form đã được hủy");
  };

  return (
    <div className="App">
      <Columns />
      <FormAdd onFinish={handleAdd} onCancel={handleCancel} />{" "}
    </div>
  );
};

export default App;
