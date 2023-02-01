import styled from 'styled-components';
import { Row, Space, Button, Form, Menu } from 'antd';

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
      font-size: ${({ theme }) => theme.calcRem(22)};
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

export const ListTableDropdown = styled(Space)`
  margin-right: 1.5em;

  & > div > span {
    font-size: ${({ theme }) => theme.calcRem(10)};
    opacity: 45%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 0 2em 0;

    & > div > p {
      font-size: ${({ theme }) => theme.calcRem(12)};
    }
  }
`;

export const ListTableDropdownMenu = styled(Menu)`
  width: 20em;
  padding: 1em;
  margin-top: 1em;

  & > div > li {
    flex: 1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 14em;
    padding: 0.5em;
    margin-top: -2em;
  }
`;

export const ListTableDropdownForm = styled(Form)`
  & > .ant-divider {
    margin: 1em 0em;
  }

  & > div > div > .ant-form-item {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    & > .ant-divider {
      margin: 0.7em 0em;
    }
  }
`;

export const ListTableBtn = styled(Button)`
  margin-right: ${props => props.firstchild && '8px'};

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin: 0 0 1em 0;
  }
`;
