import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';

import {
  FriendSettingFormWrapper,
  SettingItemsWrapper,
  SettingPrefix,
  SettingDatePicker,
  DeleteItemBtn,
  AddItemBtn,
  SkipSettingBtn,
} from '@style/account/friendSettingForm';
import { ADD_SCHEDUL } from '@reducers/schedule';

const FriendSettingForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onSubmitForm = useCallback(e => {
    console.log(e);
    console.log(e.setting_details[0].birthday.format('YYYY-MM-DD HH:mm:ss'));

    dispatch(ADD_SCHEDUL());
  }, []);

  const prefixSelector = (
    <SettingPrefix>
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </SettingPrefix>
  );

  const formInitialValue = [
    { name: '', phone: '', birthday: '' },
    { name: '', phone: '', birthday: '' },
    { name: '', phone: '', birthday: '' },
  ];

  return (
    <FriendSettingFormWrapper form={form} name="friend_list_settings" onFinish={onSubmitForm} autoComplete="off">
      <Form.List name="setting_details" initialValue={formInitialValue}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <SettingItemsWrapper key={key} gutter={10}>
                  <Col xs={24} sm={24} md={24} lg={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      rules={[{ required: true, message: 'Enter your name' }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'phone']}
                      rules={[{ required: true, message: 'Enter your phone number' }]}
                    >
                      <Input addonBefore={prefixSelector} placeholder="Phone number" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={7}>
                    <Form.Item
                      {...restField}
                      name={[name, 'birthday']}
                      rules={[{ required: true, message: 'Enter your birthday' }]}
                    >
                      <SettingDatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select date" />
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
              <SkipSettingBtn type="text">Skip this step</SkipSettingBtn>
            </a>
          </Link>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Row>
    </FriendSettingFormWrapper>
  );
};

export default FriendSettingForm;
