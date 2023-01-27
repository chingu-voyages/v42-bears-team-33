import styled from 'styled-components';
import { Row, Col } from 'antd';

export const AccountWrapper = styled(Row)`
  padding: 6em 20em;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 4em 12em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 2em 3em;
  }
`;

export const AccountHeaderWrapper = styled(Col)`
  text-align: center;
  margin-bottom: 2.5em;

  & > header {
    font-size: ${({ theme }) => theme.calcRem(38)};
    font-weight: 700;
    margin-bottom: 0.4em;
  }

  & > p {
    font-size: ${({ theme }) => theme.calcRem(14)};
    opacity: 45%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 2em;

    & > header {
      font-size: ${({ theme }) => theme.calcRem(30)};
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(11)};
    }
  }
`;

export const AccountGoogleSignin = styled(Col)`
  & > button {
    width: 100%;
  }

  & > div {
    padding-right: 50px;
  }

  & > div > span {
    font-weight: 700;
  }
`;
