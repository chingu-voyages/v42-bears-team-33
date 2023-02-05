import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Checkbox, Button, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

import { AccountGoogleSignin } from '@style/account/accountHeader';
import { SignupFormWrapper, SignupFormInput, SignupFormOption, SignupFormBtn } from '@style/account/signupForm';
import { signup } from '@actions/user';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { signupDone } = useSelector(state => state.user);

  const onGoogleSignup = useCallback(() => {
    dispatch(signup({ type: 'google' }));
  }, []);

  const onSubmitForm = useCallback(signupInfo => {
    dispatch(signup({ type: '', signupInfo }));
  }, []);

  return (
    <>
      <AccountGoogleSignin>
        <Button icon={<GoogleOutlined />} type="primary" loading={signupDone} onClick={onGoogleSignup}>
          Sign in with Google
        </Button>

        <Divider plain>OR</Divider>
      </AccountGoogleSignin>

      <SignupFormWrapper
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
          <SignupFormInput placeholder="Your name or nickname" minLength={3} allowClear />
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
          <SignupFormInput placeholder="Your email address" allowClear />
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
          <SignupFormInput type="password" placeholder="Input password" minLength={6} allowClear password="true" />
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
          <SignupFormInput type="password" placeholder="Comfirm password" minLength={6} allowClear password="true" />
        </Form.Item>

        <SignupFormOption align="center">
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
        </SignupFormOption>

        <Row align="center">
          <Form.Item>
            <SignupFormBtn htmlType="submit" loading={signupDone}>
              Create my account
            </SignupFormBtn>
          </Form.Item>
        </Row>
      </SignupFormWrapper>
    </>
  );
};

export default SignupForm;
