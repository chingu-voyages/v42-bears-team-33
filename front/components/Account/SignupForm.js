import { Form, Input, Select, Row, Checkbox, Button } from 'antd';
import React, { useCallback } from 'react';

const SignupForm = () => {
  const [form] = Form.useForm();

  const onSubmitForm = useCallback(e => {
    console.log(e);
  }, []);

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
          name="nickname"
          label="User Name"
          rules={[
            {
              type: 'string',
              message: 'User Name format is incorrect.',
            },
            {
              required: true,
              message: 'Please enter your User Name',
            },
          ]}
        >
          <Input placeholder="Your name or nickname" minLength={3} allowClear />
        </Form.Item>

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
        </Row>

        <Row align="center">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create my account
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default SignupForm;
