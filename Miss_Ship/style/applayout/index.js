import styled, { createGlobalStyle } from 'styled-components';
import { Row, Button, Space, Menu } from 'antd';

export const DropdownGlobal = createGlobalStyle`
  .ant-dropdown, .ant-dropdown-placement-bottomLeft {    
    position: fixed;           
  }  
`;

export const Layout = styled(Row)`
  padding: 0.5em 2em;
  box-shadow: 0px 2px 8px 0px rgba(240, 241, 242, 1);
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0.3em 1em;
  }
`;

export const LayoutLogo = styled.img`
  @media ${({ theme }) => theme.media.tablet} {
    width: 10em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 7em;
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
  margin: 1.4em 0 0 1.3em;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0.8em 0 0 0.2em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin: 0.4em 0 0 -0.2em;

    & > li > span {
      font-size: ${({ theme }) => theme.calcRem(11)};
    }
  }
`;

export const LayoutHeaderBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.schedule ? '12em' : '8em')};

  @media ${({ theme }) => theme.media.tablet} {
    width: ${props => (props.schedule ? '10em' : '6em')};
    height: 2em;

    & > span {
      font-size: ${({ theme }) => theme.calcRem(13)};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: ${props => (props.schedule ? '6em' : '3.5em')};
    height: 1.5em;

    & > .now-button-text {
      display: none;
    }

    & > span {
      font-size: ${({ theme }) => theme.calcRem(10)};
    }
  }
`;
