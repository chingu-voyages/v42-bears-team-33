import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

export const FooterWrapper = styled(Row)`
  background: linear-gradient(
    180deg,
    rgba(24, 144, 255, 0) 3.53%,
    rgba(24, 144, 255, 0.3) 16.55%,
    #40a9ff 42.07%,
    #096dd9 64.99%,
    #003a8c 100%
  );
  padding: 7em 3em;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 4em 1.5em;
  }
`;

export const FooterStep = styled(Col)`
  text-align: center;
  ${({ theme }) => theme.flexColumnSet()};
  margin-bottom: 3.5em;

  & > img {
    margin-bottom: 1em;
  }

  & > header {
    color: white;
    font-size: ${({ theme }) => theme.calcRem(22)};
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  & > p {
    color: white;
    font-size: ${({ theme }) => theme.calcRem(12)};
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 2em;

    & > img {
      width: 3em;
    }

    & > header {
      font-size: ${({ theme }) => theme.calcRem(15)};
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(11)};
    }
  }
`;

export const FooterBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14em;
  font-size: ${({ theme }) => theme.calcRem(18)};

  @media ${({ theme }) => theme.media.mobile} {
    width: 9em;
    font-size: ${({ theme }) => theme.calcRem(15)};
  }
`;
