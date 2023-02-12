import styled from 'styled-components';
import { Row, Col } from 'antd';

export const LandingWrapper = styled(Row)`
  padding: 5em 8em;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 3em 4em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1.5em 2em;
  }
`;

export const LandingHeaderInfo = styled(Col)`
  & > header {
    font-size: ${({ theme }) => theme.calcRem(38)};
    font-weight: 700;
    margin-bottom: 1.3em;
  }

  & > a > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 3em;
  }

  & > img {
    margin: 0 0 0 auto;
  }

  @media ${({ theme }) => theme.media.tablet} {
    & > header {
      font-size: ${({ theme }) => theme.calcRem(23)};
    }

    & > a > button {
      width: 8em;
      height: 2em;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > header {
      font-size: ${({ theme }) => theme.calcRem(16)};
    }

    & > a > button {
      width: 6em;
      font-size: ${({ theme }) => theme.calcRem(12)};
    }
  }
`;
