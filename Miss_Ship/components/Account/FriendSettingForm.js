import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';

import countries from '@util/countryCode';
import { addFriends } from '@actions/schedule';
import { INVISIBLE_ADD_FRIENDS } from '@reducers/schedule';
import {
  FriendSettingFormWrapper,
  SettingItemsWrapper,
  SettingItemsPhone,
  SettingDatePicker,
  DeleteItemBtn,
  AddItemBtn,
  SkipSettingBtn,
} from '@style/account/friendSettingForm';

const FriendSettingForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { addFriendsLoading, addFriendsVisible } = useSelector(state => state.schedule);

  const onSubmitForm = useCallback(e => {
    const values = [];

    e.setting_details.forEach(v => {
      const fullDate = v.birthday._d;
      const year = fullDate.getFullYear();
      const month = `0${1 + fullDate.getMonth()}`.slice(-2);
      const day = `0${fullDate.getDate()}`.slice(-2);

      delete v.birthday;
      v.dateOfBirth = `${year}-${month}-${day}`;

      values.push(v);
    });

    dispatch(addFriends(values));
    if (addFriendsVisible) dispatch(INVISIBLE_ADD_FRIENDS());
  }, []);

  const onCancelAddFriends = useCallback(() => {
    dispatch(INVISIBLE_ADD_FRIENDS());
  }, []);

  const formInitialValue = [
    { name: '', mobileNumber: '', dateOfBirth: '' },
    { name: '', mobileNumber: '', dateOfBirth: '' },
    { name: '', mobileNumber: '', dateOfBirth: '' },
  ];

  return (
    <FriendSettingFormWrapper
      addfriendsvisible={addFriendsVisible}
      form={form}
      name="friend_list_settings"
      onFinish={onSubmitForm}
      autoComplete="off"
    >
      <Form.List name="setting_details" initialValue={formInitialValue}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <SettingItemsWrapper key={key} gutter={10}>
                  <Col xs={24} sm={24} md={24} lg={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      rules={[{ required: true, message: 'Enter your name' }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={12}>
                    <SettingItemsPhone>
                      <Col span={6}>
                        <Form.Item
                          {...restField}
                          name={[name, 'countryCode']}
                          rules={[{ required: true, message: 'Enter your country mobile code' }]}
                        >
                          <Select
                            showSearch
                            placeholder="Code"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={countries}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={18}>
                        <Form.Item
                          {...restField}
                          name={[name, 'mobileNumber']}
                          rules={[{ required: true, message: 'Enter your phone number' }]}
                        >
                          <Input placeholder="Phone number" />
                        </Form.Item>
                      </Col>
                    </SettingItemsPhone>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={5}>
                    <Form.Item
                      {...restField}
                      name={[name, 'birthday']}
                      rules={[{ required: true, message: 'Enter your birthday' }]}
                    >
                      <SettingDatePicker placeholder="Select date" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={1}>
                    <DeleteItemBtn onClick={() => remove(name)} />
                  </Col>
                </SettingItemsWrapper>
              );
            })}

            <SettingItemsWrapper>
              <Col span={24}>
                <Form.Item>
                  <AddItemBtn
                    icon={<PlusOutlined />}
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    Add row
                  </AddItemBtn>
                </Form.Item>
              </Col>
            </SettingItemsWrapper>
          </>
        )}
      </Form.List>

      <Row align="center">
        <Form.Item>
          <Link href="/friends">
            <a>
              {addFriendsVisible ? (
                <SkipSettingBtn type="text" onClick={onCancelAddFriends}>
                  Cancel
                </SkipSettingBtn>
              ) : (
                <SkipSettingBtn type="text">Skip this step</SkipSettingBtn>
              )}
            </a>
          </Link>

          <Button htmlType="submit" loading={addFriendsLoading}>
            Submit
          </Button>
        </Form.Item>
      </Row>
    </FriendSettingFormWrapper>
  );
};

export default FriendSettingForm;
