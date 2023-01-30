import React, { useCallback } from 'react';
import { Form, Space, Input, Button, Row, Select, DatePicker } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';

const FriendSettingForm = () => {
  const [form] = Form.useForm();

  const onSubmitForm = useCallback(e => {
    console.log(e);
    console.log(e.setting_details[0].birthday.format('YYYY-MM-DD HH:mm:ss'));
  }, []);

  const prefixSelector = (
    <Select style={{ width: 70 }}>
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </Select>
  );

  return (
    <>
      <Form form={form} name="friend_list_settings" onFinish={onSubmitForm} autoComplete="off">
        <Form.List
          name="setting_details"
          initialValue={[
            { name: '', phone: '', birthday: '' },
            { name: '', phone: '', birthday: '' },
            { name: '', phone: '', birthday: '' },
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => {
                return (
                  <Space key={key} direction="horizontal" align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      rules={[{ required: true, message: 'Enter your name' }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'phone']}
                      rules={[{ required: true, message: 'Enter your phone number' }]}
                    >
                      <Input addonBefore={prefixSelector} placeholder="Phone number" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'birthday']}
                      rules={[{ required: true, message: 'Enter your birthday' }]}
                    >
                      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select date" />
                    </Form.Item>

                    <DeleteOutlined onClick={() => remove(name)} />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                >
                  Add row
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Row align="center">
          <Form.Item>
            <Link href="/friends">
              <a>
                <Button type="text">Skip this step</Button>
              </a>
            </Link>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default FriendSettingForm;
