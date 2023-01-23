import React from 'react';
import { Badge, Row, Space, Table } from 'antd';

const TableContent = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', render: text => <button type="button">{text}</button> },
    {
      title: 'Status',
      dataIndex: 'status',
      render: text => (
        <Space>
          <Badge status="success" text={text} />
        </Space>
      ),
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.birthday) - new Date(b.birthday),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <Space>
          <button type="button">Schedule a message</button>
          <div>|</div>
          <button type="button">Send now</button>
        </Space>
      ),
    },
  ];

  const data = [
    { key: '1', name: 'Cody Fisher', status: 'Sent', birthday: '1992-06-23' },
    {
      key: '2',
      name: 'Darlene Robertson',
      status: 'Draft',
      birthday: '1973-12-11',
    },
    {
      key: '3',
      name: 'Annette Black',
      status: 'Overdue',
      birthday: '2007-01-08',
    },
    { key: '4', name: 'Co12dy Fisher', status: 'Sent', birthday: '1992-06-21' },
    { key: '5', name: 'Co5315dy Fisher', status: 'Sent', birthday: '1992-06-22' },
    { key: '6', name: 'Co123123dy Fisher', status: 'Sent', birthday: '1992-06-26' },
    { key: '7', name: 'Co5235dy Fisher', status: 'Sent', birthday: '1992-02-23' },
    { key: '8', name: 'C123ody Fisher', status: 'Sent', birthday: '1992-01-23' },
    { key: '9', name: 'C53ody Fisher', status: 'Sent', birthday: '1992-03-23' },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <Row>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        pagination={{ pageSize: 7 }}
        columns={columns}
        dataSource={data}
      />
    </Row>
  );
};

export default TableContent;
