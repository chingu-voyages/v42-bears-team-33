import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu, Form, Input, Button, Row, Divider, Col } from 'antd';
import { DownOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import TableContent from '@components/Friends/TableContent';
import FriendSettingForm from '@components/Account/FriendSettingForm';
import { ADD_CATEGORY, DELETE_CATEGORY, VISIBLE_ADD_FRIENDS } from '@reducers/schedule';
import {
  ListTableWrapper,
  ListTableHeader,
  ListTableItems,
  ListTableDropdown,
  ListTableDropdownMenu,
  ListTableDropdownForm,
  ListTableBtn,
} from '@style/friends/tableHeader';
import { removeFriend } from '@actions/schedule';

const ListTable = () => {
  const dispatch = useDispatch();
  const { category, addFriendsVisible, removeFriendLoading } = useSelector(state => state.schedule);
  const [deleteFriends, setDeleteFriends] = useState('');

  const onClickDropdownItem = useCallback(e => {
    console.log(e.key);
  });

  const onSubmitForm = useCallback(e => {
    dispatch(ADD_CATEGORY(e.item));
  });

  const onClickDeleteCategory = useCallback(
    v => () => {
      dispatch(DELETE_CATEGORY(v));
    },
    [],
  );

  const onClickAddFriends = useCallback(() => {
    dispatch(VISIBLE_ADD_FRIENDS());
  }, []);

  const onClickDeleteFriends = useCallback(() => {
    dispatch(
      removeFriend({
        friendId: deleteFriends,
      }),
    );
  }, [deleteFriends]);

  const menu = (
    <ListTableDropdownMenu onClick={onClickDropdownItem}>
      {category.map(v => (
        <Row>
          <Menu.Item>{v}</Menu.Item>
          <Button type="text" icon={<DeleteOutlined />} onClick={onClickDeleteCategory(v)} />
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
            <Dropdown overlay={menu} trigger="hover" disabled={addFriendsVisible}>
              <a>
                <ListTableDropdown $addfriendsvisible={addFriendsVisible}>
                  Choose Category <DownOutlined />
                </ListTableDropdown>
              </a>
            </Dropdown>

            <ListTableBtn
              firstchild="true"
              $addfriendsvisible={addFriendsVisible}
              danger
              disabled={addFriendsVisible}
              icon={<DeleteOutlined />}
              onClick={onClickDeleteFriends}
              loading={removeFriendLoading}
            >
              Delete Friend
            </ListTableBtn>
            {addFriendsVisible || (
              <ListTableBtn type="primary" icon={<PlusOutlined />} onClick={onClickAddFriends}>
                Add New Friend
              </ListTableBtn>
            )}
          </ListTableItems>
        </ListTableHeader>

        {addFriendsVisible ? <FriendSettingForm /> : <TableContent setDeleteFriends={setDeleteFriends} />}
      </ListTableWrapper>
    </>
  );
};

export default ListTable;
