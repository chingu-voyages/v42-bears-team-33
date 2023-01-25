import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Space, Divider, Dropdown, Menu } from 'antd';

import { OPEN_SCHEDULE_MODAL } from '@reducers/schedule';
import {
  TableContentWrapper,
  TableContentHeader,
  TableContentBadge,
  TableContentBtn,
} from '@style/friends/tableContent';
import { LOAD_MY_FRIENDS_SUCCESS } from '@reducers/user';

const TableContent = () => {
  const dispatch = useDispatch();
  const { firendsInfo } = useSelector(state => state.user);
  const [tableSize, setTableSize] = useState(10);
  const [desktop, setDesktop] = useState(true);

  const onClickName = useCallback(e => {
    console.log(e.key);
  });

  const onClickSchedule = useCallback(() => {
    dispatch(OPEN_SCHEDULE_MODAL());
  }, []);

  const menu = (
    <Menu onClick={onClickName}>
      <Menu.Item key="schedule">
        <button type="button" onClick={onClickSchedule}>
          Schedule a message
        </button>
      </Menu.Item>

      <Menu.Item key="send">
        <button type="button">Send now</button>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: <TableContentHeader>Name</TableContentHeader>,
      dataIndex: 'name',
      key: 'name',
      render: text => (
        <Dropdown overlay={menu} trigger="click">
          <TableContentBtn type="button">{text}</TableContentBtn>
        </Dropdown>
      ),
      width: desktop && '50%',
    },
    {
      title: <TableContentHeader>Status</TableContentHeader>,
      dataIndex: 'status',
      key: 'status',
      render: status => <TableContentBadge status={status.info} text={status.text} />,
    },
    {
      title: <TableContentHeader>Birthday</TableContentHeader>,
      dataIndex: 'birthday',
      key: 'birthday',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.birthday) - new Date(b.birthday),
    },
    {
      title: <TableContentHeader>Action</TableContentHeader>,
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Space>
          <TableContentBtn type="button" onClick={onClickSchedule}>
            Schedule a message
          </TableContentBtn>
          <Divider type="vertical" />
          <TableContentBtn type="button">Send now</TableContentBtn>
        </Space>
      ),
      responsive: ['md'],
    },
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

  useEffect(() => {
    function onResize() {
      if (document.documentElement.clientWidth > 1200) setDesktop(true);
      else setDesktop(false);

      if (document.documentElement.clientHeight > 900) setTableSize(10);
      else if (document.documentElement.clientHeight > 700) setTableSize(8);
      else setTableSize(6);
    }

    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('load', onResize);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    dispatch(LOAD_MY_FRIENDS_SUCCESS());
  }, []);

  return (
    <>
      <TableContentWrapper
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        pagination={{ pageSize: tableSize }}
        columns={columns}
        dataSource={firendsInfo}
      />
    </>
  );
};

export default TableContent;
