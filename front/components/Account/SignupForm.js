import { Form, Input, Select, Row, Checkbox, Button } from 'antd';
import React, { useCallback } from 'react';

const SignupForm = () => {
  const [form] = Form.useForm();

  const onSubmitForm = useCallback(e => {
    console.log(e);
  }, []);

  const onSearch = useCallback(e => {
    console.log(e);
  }, []);

  const countryNumberSelector = (
    <Form.Item name="countryNum" noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Select.Option value="1">+1</Select.Option>
        <Select.Option value="45">+45</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form
        className="bold"
        form={form}
        name="signup"
        onFinish={onSubmitForm}
        scrollToFirstError
        requiredMark={false}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email address"
          rules={[
            {
              type: 'email',
              message: 'E-mail format is incorrect.',
            },
            {
              required: true,
              message: 'Please enter your E-mail Adress.',
            },
          ]}
        >
          <Input placeholder="Your email address" allowClear />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your Password.',
            },
          ]}
          hasFeedback
        >
          <Input type="password" placeholder="Input password" minLength={6} allowClear />
        </Form.Item>

        <Form.Item
          name="confirm-password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please enter your Password.',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Passwords do not match.'));
              },
            }),
          ]}
        >
          <Input type="password" placeholder="Comfirm password" allowClear />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Mobile"
          rules={[
            {
              required: true,
              message: 'Please enter your Phone Number.',
            },
          ]}
        >
          <Input type="number" placeholder="Your phone number" allowClear addonBefore={countryNumberSelector} />
        </Form.Item>

        <Form.Item
          name="authCode"
          rules={[
            {
              required: true,
              message: 'Enter verification Code.',
            },
          ]}
        >
          <Input.Search
            type="text"
            placeholder="Verification code"
            allowClear
            enterButton="Get Code"
            onSearch={onSearch}
          />
        </Form.Item>

        <Row align="center">
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Please agree to the terms.')),
              },
            ]}
          >
            <Checkbox>I agree to all of the Terms of Use.</Checkbox>
          </Form.Item>

          <Row align="center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create my account
              </Button>
            </Form.Item>
          </Row>
        </Row>
      </Form>
    </>
  );
};

export default SignupForm;
