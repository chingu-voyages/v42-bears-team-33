import styled from 'styled-components';
import { Form, Row, Button, Input } from 'antd';

export const LoginFormWrapper = styled(Form)`
  & > div > .ant-form-item-label {
    font-weight: 700;
  }
`;

export const LoginFormInput = styled(Input)`
  padding: 0.7em 1.5em 0.7em 0.5em;
`;

export const LoginFormOption = styled(Row)`
  font-weight: 700;

  & > div > div > div > div > a {
    color: ${({ theme }) => theme.colors.button};
  }

  @media ${({ theme }) => theme.media.tablet} {
    ${({ theme }) => theme.flexColumnSet()};

    & > .ant-form-item {
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 1.5em;
  }
`;

export const LoginFormBtn = styled(Button)`
  width: 9em;
  font-size: ${({ theme }) => theme.calcRem(15)};

  @media ${({ theme }) => theme.media.tablet} {
    width: 7em;
    margin-top: 1.5em;
  }
`;
