import styled from 'styled-components';
import { Button } from 'antd';

import { LoginFormInput, LoginFormOption, LoginFormWrapper } from './loginForm';

export const SignupFormWrapper = styled(LoginFormWrapper)``;
export const SignupFormInput = styled(LoginFormInput)``;
export const SignupFormOption = styled(LoginFormOption)``;

export const SignupFormBtn = styled(Button)`
  width: 12em;
  font-size: ${({ theme }) => theme.calcRem(15)};

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 1.5em;
  }
`;
