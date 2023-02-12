import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Space, Divider, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';

import { OPEN_SCHEDULE_MODAL, OPEN_MESSAGE_NOW_MODAL } from '@reducers/schedule';
import {
  TableContentWrapper,
  TableContentHeader,
  TableContentBadge,
  TableContentBtn,
} from '@style/friends/tableContent';

const TableContent = ({ setDeleteFriends }) => {
  const dispatch = useDispatch();
  const { friendsInfo } = useSelector(state => state.schedule);
  const [tableSize, setTableSize] = useState(10);
  const [desktop, setDesktop] = useState(true);

  const onClickSchedule = useCallback(
    record => () => {
      dispatch(OPEN_SCHEDULE_MODAL(record));
    },
    [],
  );

  const onClickMessageNow = useCallback(
    record => () => {
      dispatch(OPEN_MESSAGE_NOW_MODAL(record));
    },
    [],
  );

  const menu = record => () => {
    return (
      <Menu>
        <Menu.Item key="schedule">
          <button type="button" onClick={onClickSchedule(record)}>
            Schedule a message
          </button>
        </Menu.Item>

        <Menu.Item key="send">
          <button type="button" onClick={onClickMessageNow(record)}>
            Send now
          </button>
        </Menu.Item>
      </Menu>
    );
  };

  const columns = [
    {
      title: <TableContentHeader>Name</TableContentHeader>,
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <Dropdown overlay={menu(record)} trigger="hover">
          <TableContentBtn type="button">{name}</TableContentBtn>
        </Dropdown>
      ),
      width: desktop && '50%',
    },
    {
      title: <TableContentHeader>Status</TableContentHeader>,
      dataIndex: 'sent',
      key: 'sent',
      render: sent => <TableContentBadge status={sent ? 'success' : 'default'} text={sent ? 'Sent' : 'Draft'} />,
    },
    {
      title: <TableContentHeader>Birthday</TableContentHeader>,
      dataIndex: 'dateOfBirth',
      key: 'birthday',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
    },
    {
      title: <TableContentHeader>Action</TableContentHeader>,
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <TableContentBtn type="button" onClick={onClickSchedule(record)}>
            Schedule a message
          </TableContentBtn>
          <Divider type="vertical" />
          <TableContentBtn type="button" onClick={onClickMessageNow(record)}>
            Send now
          </TableContentBtn>
        </Space>
      ),
      responsive: ['md'],
    },
  ];

  const rowSelection = {
    onChange: selectedRowKeys => {
      setDeleteFriends(selectedRowKeys.join(''));
    },

    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  useEffect(() => {
    function onResize() {
      if (document.documentElement.clientWidth > 1200) setDesktop(true);
      else setDesktop(false);

      if (document.documentElement.clientHeight > 900) setTableSize(10);
      else if (document.documentElement.clientHeight > 700) setTableSize(6);
      else setTableSize(4);
    }

    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('load', onResize);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const initialFriendsInfo = [
    { _id: 1, name: 'Jenny Wilson', dateOfBirth: '2022-12-05' },
    { _id: 2, name: 'Floyd Miles', dateOfBirth: '2023-02-13' },
    { _id: 3, name: 'Brooklyn Simmons', dateOfBirth: '2023-01-06' },
  ];

  return (
    <>
      <TableContentWrapper
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        pagination={{ pageSize: tableSize }}
        columns={columns}
        dataSource={!friendsInfo?.length ? initialFriendsInfo : friendsInfo}
        rowKey={record => record._id}
      />
    </>
  );
};

TableContent.propTypes = {
  setDeleteFriends: PropTypes.func,
};

export default TableContent;
