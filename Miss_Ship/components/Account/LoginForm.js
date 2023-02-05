import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Form, Checkbox, Button, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { login } from '@actions/user';
import { AccountGoogleSignin } from '@style/account/accountHeader';
import { LoginFormWrapper, LoginFormInput, LoginFormOption, LoginFormBtn } from '@style/account/loginForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { loginLoading } = useSelector(state => state.user);

  const onGoogleLogin = useCallback(() => {
    dispatch(login({ type: 'google' }));
  }, []);

  const onSubmitForm = useCallback(loginInfo => {
    dispatch(login({ type: '', loginInfo }));
  }, []);

  return (
    <>
      <AccountGoogleSignin>
        <Button icon={<GoogleOutlined />} type="primary" loading={loginLoading} onClick={onGoogleLogin}>
          Sign in with Google
        </Button>

        <Divider plain>OR</Divider>
      </AccountGoogleSignin>

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
            <LoginFormBtn htmlType="submit" loading={loginLoading}>
              Log in
            </LoginFormBtn>
          </Form.Item>
        </Row>
      </LoginFormWrapper>
    </>
  );
};

export default LoginForm;
