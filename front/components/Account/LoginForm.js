import React, { useCallback } from 'react';
import { signIn } from 'next-auth/react';
import { Row, Form, Checkbox, Button, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { AccountGoogleSignin } from '@style/account/accountHeader';
import { LoginFormWrapper, LoginFormInput, LoginFormOption, LoginFormBtn } from '@style/account/loginForm';

const LoginForm = () => {
  const [form] = Form.useForm();

  const SigninGoogle = useCallback(() => {
    signIn();
  }, []);

  const onSubmitForm = useCallback(e => {
    console.log(e);
  }, []);

  return (
    <>
      <AccountGoogleSignin>
        <Button icon={<GoogleOutlined />} type="primary" onClick={SigninGoogle}>
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
            <LoginFormBtn htmlType="submit">Log in</LoginFormBtn>
          </Form.Item>
        </Row>
      </LoginFormWrapper>
    </>
  );
};

export default LoginForm;
