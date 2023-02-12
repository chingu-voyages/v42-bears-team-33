import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import TableContent from '@components/Friends/TableContent';
import FriendSettingForm from '@components/Account/FriendSettingForm';
import { VISIBLE_ADD_FRIENDS } from '@reducers/schedule';
import { ListTableWrapper, ListTableHeader, ListTableItems, ListTableBtn } from '@style/friends/tableHeader';
import { removeFriend } from '@actions/schedule';

const ListTable = () => {
  const dispatch = useDispatch();
  const { addFriendsVisible, removeFriendLoading } = useSelector(state => state.schedule);
  const [deleteFriends, setDeleteFriends] = useState('');

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

  return (
    <>
      <ListTableWrapper>
        <ListTableHeader>
          <h2>My Friend List</h2>

          <ListTableItems>
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
