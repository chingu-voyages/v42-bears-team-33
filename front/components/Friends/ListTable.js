import React, { useCallback } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined, UsergroupAddOutlined, PlusOutlined } from '@ant-design/icons';

import { ListTableWrapper, ListTableItems, ListTableDropdown, ListTableBtn } from '@style/friends/tableHeader';

const ListTable = () => {
  const onClickDropdownItem = useCallback(e => {
    console.log(e.key);
  });

  const menu = (
    <Menu onClick={onClickDropdownItem}>
      <Menu.Item key="item1">1st menu item</Menu.Item>
      <Menu.Item key="item2">2st menu item</Menu.Item>
      <Menu.Item key="item3">3st menu item</Menu.Item>
    </Menu>
  );

  return (
    <ListTableWrapper justify="space-between" align="middle">
      <h2>My Friend List</h2>

      <ListTableItems>
        <Dropdown overlay={menu}>
          <a>
            <ListTableDropdown>
              <p>Choose Category</p>
              <DownOutlined />
            </ListTableDropdown>
          </a>
        </Dropdown>

        <ListTableBtn firstchild="true" icon={<UsergroupAddOutlined />}>
          Manage Friend List
        </ListTableBtn>
        <ListTableBtn type="primary" icon={<PlusOutlined />}>
          Add New Friend
        </ListTableBtn>
      </ListTableItems>
    </ListTableWrapper>
  );
};

export default ListTable;
