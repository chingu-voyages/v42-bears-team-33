import styled from 'styled-components';
import { Row, Button } from 'antd';

export const Layout = styled(Row)`
  padding: 1em 3em;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0.5em 1.5em;
  }
`;

export const LayoutInfo = styled(Row)`
  & > img {
    width: 2.5em;
    height: 2.5em;
    margin-right: 0.8em;
  }

  & > header {
    font-size: ${({ theme }) => theme.calcRem(18)};
    font-weight: 700;
    line-height: 2.2;
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > img {
      width: 2em;
      height: 2em;
      margin-right: 0.5em;
    }

    & > header {
      font-size: ${({ theme }) => theme.calcRem(15)};
      font-weight: 700;
      line-height: 2.2;
    }
  }
`;

export const LayoutHeaderBtn = styled(Button)`
  width: 6em;
  margin-right: ${(props) => props.firstChild && '0.8em'};

  @media ${({ theme }) => theme.media.mobile} {
    width: 5.5em;
    font-size: ${({ theme }) => theme.calcRem(12)};
  }
`;
