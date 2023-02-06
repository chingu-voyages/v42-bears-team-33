import styled from 'styled-components';
import { Row, Button, Form, Menu } from 'antd';

export const ListTableWrapper = styled(Row)`
  width: 100%;
  background-color: white;
  padding: 0 1.5em;
  ${({ theme }) => theme.flexColumnSet()};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1em 1.5em;
  }
`;

export const ListTableHeader = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet('space-between')};

  & > h2 {
    font-size: ${({ theme }) => theme.calcRem(16)};
    padding: 1.3em 0.5em;
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 0.5em;
    ${({ theme }) => theme.flexColumnSet()};

    & > h2 {
      font-size: ${({ theme }) => theme.calcRem(20)};
      padding: 0.5em 0 0 0;
      margin-bottom: 0.5em;
    }
  }
`;

export const ListTableItems = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    ${({ theme }) => theme.flexColumnSet()};
  }
`;

export const ListTableDropdown = styled(Button)`
  margin-right: 0.5em;
  opacity: 45%;

  & > .anticon-down {
    font-size: ${({ theme }) => theme.calcRem(10)};
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 0 2em 0;
  }
`;

export const ListTableDropdownMenu = styled(Menu)`
  width: 15em;
  padding: 0.5em;
  margin-top: 0.5em;
  right: 10%;

  & > div {
    ${({ theme }) => theme.flexSet('space-between')};
    margin-bottom: 0.5em;
  }

  & > div > li {
    flex: 1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 12.5em;
    margin-top: -2.3em;
    right: 5%;

    & > div {
      ${({ theme }) => theme.flexSet('space-between')};
      margin-bottom: 0.4em;
    }
  }
`;

export const ListTableDropdownForm = styled(Form)`
  & > .ant-divider {
    margin: 0.5em 0em;
  }

  & > div > div > .ant-form-item {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    & > .ant-divider {
      margin: 0.4em 0em;
    }
  }
`;

export const ListTableBtn = styled(Button)`
  margin-right: ${props => props.firstchild && '0.5em'};

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin: 0 0 1em 0;
  }
`;
