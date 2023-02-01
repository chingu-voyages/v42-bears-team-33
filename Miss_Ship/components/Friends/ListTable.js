import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu, Form, Input, Button, Row, Divider, Col } from 'antd';
import { DownOutlined, UsergroupAddOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import TableContent from '@components/Friends/TableContent';
import {
  ListTableWrapper,
  ListTableHeader,
  ListTableItems,
  ListTableDropdown,
  ListTableDropdownMenu,
  ListTableDropdownForm,
  ListTableBtn,
} from '@style/friends/tableHeader';
import { ADD_CATEGORY, DELETE_CATEGORY } from '@reducers/schedule';

const ListTable = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state.schedule);

  const onClickDropdownItem = useCallback(e => {
    console.log(e.key);
  });

  const onSubmitForm = useCallback(e => {
    dispatch(ADD_CATEGORY(e.item));
  });

  const onClickDeleteBtn = useCallback(
    v => () => {
      dispatch(DELETE_CATEGORY(v));
    },
    [],
  );

  const menu = (
    <ListTableDropdownMenu onClick={onClickDropdownItem}>
      {category.map(v => (
        <Row>
          <Menu.Item>{v}</Menu.Item>
          <Button type="text" icon={<DeleteOutlined />} onClick={onClickDeleteBtn(v)} />
        </Row>
      ))}

      <ListTableDropdownForm name="category-setting" onFinish={onSubmitForm}>
        {category.length !== 0 && <Divider />}
        <Row>
          <Col span={14}>
            <Form.Item name="item">
              <Input placeholder="Enter name" />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item>
              <Button htmlType="submit" type="text" icon={<PlusOutlined />}>
                Add
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </ListTableDropdownForm>
    </ListTableDropdownMenu>
  );

  return (
    <>
      <ListTableWrapper>
        <ListTableHeader>
          <h2>My Friend List</h2>

          <ListTableItems>
            <Dropdown overlay={menu} trigger="hover">
              <a>
                <ListTableDropdown>
                  Choose Category <DownOutlined />
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
        </ListTableHeader>

        <TableContent />
      </ListTableWrapper>
    </>
  );
};

export default ListTable;
