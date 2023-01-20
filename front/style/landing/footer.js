import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: 5em 0;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1.5em 0;
  }
`;

export const FooterContent = styled(Row)`
  margin-bottom: 4em;

  @media ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => theme.flexColumnSet()};
    margin-bottom: 1.5em;
  }
`;

export const FooterContentInfo = styled(Col)`
  text-align: center;
  margin-right: ${(props) => (props.lastChild ? '0' : '0.8em')};

  & > div > img {
    width: 5em;
    margin: 0 auto 2em auto;
  }

  & > div > h2 {
    color: white;
    font-size: ${({ theme }) => theme.calcRem(24)};
    margin-bottom: 0.5em;
  }

  & > div > p {
    width: 12em;
    color: white;
    font-size: ${({ theme }) => theme.calcRem(14)};
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > div > img {
      width: 7em;
      margin: 0 auto 0.5em auto;
    }

    & > div > h2 {
      font-size: ${({ theme }) => theme.calcRem(20)};
    }

    & > div > p {
      width: 15em;
      font-size: ${({ theme }) => theme.calcRem(14)};
      margin-bottom: 1em;
    }
  }
`;

export const FooterDivider = styled.div`
  width: 40px;
  height: 2px;
  background-color: #d9d9d9;
  margin-right: 1.5em;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const FooterBtn = styled(Button)`
  width: 7em;

  @media ${({ theme }) => theme.media.mobile} {
    width: 9em;
    font-size: ${({ theme }) => theme.calcRem(17)};
  }
`;
