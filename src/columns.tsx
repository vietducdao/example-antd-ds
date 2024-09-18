import React from "react";
import { Space, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface ColumnsProps {
  data: DataType[];
  handleDelete: (key: string) => void;
}

const Columns: React.FC<ColumnsProps> = ({ data, handleDelete }) => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.key)}>Delete</a>
          <a>Fill</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Columns;
