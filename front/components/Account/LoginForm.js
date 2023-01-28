import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Form, Checkbox } from 'antd';
import Link from 'next/link';

import { LOG_IN_SUCCESS } from '@reducers/user';
import { LoginFormWrapper, LoginFormInput, LoginFormOption, LoginFormBtn } from '@style/account/loginForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onClickLogin = useCallback(() => {
    dispatch(LOG_IN_SUCCESS());
  }, []);

  const onSubmitForm = useCallback(e => {
    console.log(e);
  }, []);

  return (
    <LoginFormWrapper
      form={form}
      name="login"
      layout="vertical"
      onFinish={onSubmitForm}
      scrollToFirstError
      requiredMark={false}
    >
      <Form.Item
        name="email"
        label="Email address"
        hasFeedback
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
        <LoginFormInput placeholder="Your email address" allowClear />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please enter your Password.',
          },
        ]}
      >
        <LoginFormInput type="password" placeholder="input password" minLength={6} allowClear password="true" />
      </Form.Item>

      <LoginFormOption justify="space-between">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Link href="/">
            <a>Forgot your password?</a>
          </Link>
        </Form.Item>
      </LoginFormOption>

      <Row align="center">
        <Form.Item>
          <LoginFormBtn htmlType="submit" onClick={onClickLogin}>
            Log in
          </LoginFormBtn>
        </Form.Item>
      </Row>
    </LoginFormWrapper>
  );
};

export default LoginForm;
