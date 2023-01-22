import React from 'react';
import { Dropdown, Row, Menu, Space, Button, Col } from 'antd';
import {
  DownOutlined,
  UsergroupAddOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const ListTable = () => {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2st menu item</Menu.Item>
      <Menu.Item>3st menu item</Menu.Item>
    </Menu>
  );

  return (
    <Row>
      <Col>
        <h2>My Friend List</h2>
      </Col>

      <Col>
        <Dropdown overlay={menu}>
          <Space>
            <p>Choose Category</p>
            <DownOutlined />
          </Space>
        </Dropdown>

        <Button icon={<UsergroupAddOutlined />}>Manage Friend List</Button>
        <Button type="primary" icon={<PlusOutlined />}>
          Add New Friend
        </Button>
      </Col>
    </Row>
  );
};

export default ListTable;
