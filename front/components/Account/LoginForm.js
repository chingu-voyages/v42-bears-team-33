import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider, Form, Input, Checkbox } from 'antd';

import { LOG_IN_SUCCESS } from '@reducers/user';
import Link from 'next/link';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onClickLogin = useCallback(() => {
    // dispatch(LOG_IN_SUCCESS());
  }, []);

  const onSubmitForm = useCallback(e => {
    console.log(e);
  }, []);

  return (
    <>
      <Button>Sign in with Google</Button>
      <Divider>OR</Divider>

      <Form form={form} name="login" layout="vertical" onFinish={onSubmitForm} scrollToFirstError requiredMark={false}>
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
          <Input placeholder="input password" minLength={6} allowClear />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Link href="/">
            <a>Forgot your password?</a>
          </Link>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" onClick={onClickLogin}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
