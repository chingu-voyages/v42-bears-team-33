import styled from 'styled-components';
import { Row, Col } from 'antd';

export const LandingWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 6em 10em;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 3em 1em;
  }
`;

export const LandingHeaderInfo = styled(Col)`
  & > h1 {
    font-size: ${({ theme }) => theme.calcRem(38)};
    font-weight: 700;
    margin-bottom: 1.3em;
  }

  & > a > button {
    width: 7em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > h1 {
      font-size: ${({ theme }) => theme.calcRem(15)};
      font-weight: 700;
    }

    & > a > button {
      font-size: ${({ theme }) => theme.calcRem(11)};
    }

    & > img {
      width: 13em;
    }
  }
`;
