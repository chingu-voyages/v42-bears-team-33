import styled from 'styled-components';
import { Row, Button, Space, Menu } from 'antd';

export const Layout = styled(Row)`
  padding: 1em 3em;
  box-shadow: 0px 2px 8px 0px rgba(240, 241, 242, 1);
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
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

  @media ${({ theme }) => theme.media.tablet} {
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

export const LayoutHeaderProfile = styled(Space)`
  & > div > p {
    font-weight: 600;
    font-size: ${({ theme }) => theme.calcRem(15)};
  }

  & > div > span {
    width: 2em;
    height: 2em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > div > span {
      width: 1.5em;
      height: 1.5em;
    }

    & > div > p {
      font-size: ${({ theme }) => theme.calcRem(12)};
    }
  }
`;

export const LayoutHeaderMenu = styled(Menu)`
  width: 15em;
  left: 20%;

  & > li {
    font-size: ${({ theme }) => theme.calcRem(15)};
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 10em;
    left: 15%;

    & > li {
      font-size: ${({ theme }) => theme.calcRem(13)};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 8em;

    & > li {
      font-size: ${({ theme }) => theme.calcRem(12)};
    }
  }
`;

export const LayoutHeaderBtn = styled(Button)`
  width: 6em;

  @media ${({ theme }) => theme.media.tablet} {
    width: 3.5em;
    height: 2em;
    padding: 0;

    & > span {
      font-size: ${({ theme }) => theme.calcRem(5)};
      line-height: 3;
    }
  }
`;
