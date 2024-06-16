// ListViewHOC.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Space } from 'antd';

const ListViewHOC = ({ fetchData, columns }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  const handleDelete = () => {
    // Implement bulk delete functionality using selectedRowKeys
    console.log("Selected Rows: ", selectedRowKeys);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
    // Fetch data with updated pagination, filtering, and sorting
    fetchData({
      ...pagination,
      filters,
      sorter,
    }).then((result) => {
      setData(result);
      setLoading(false);
    });
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary">Create</Button>
        <Button danger onClick={handleDelete}>
          Batch Delete
        </Button>
        <Input.Search placeholder="Search" />
      </Space>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ListViewHOC;
