import styled from 'styled-components';
import { Row, Space, Button } from 'antd';

export const ListTableWrapper = styled(Row)`
  width: 100%;
  background-color: white;
  padding: 0 1.5em;
  ${({ theme }) => theme.flexColumnSet()};

  @media ${({ theme }) => theme.media.mobile} {
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

  @media ${({ theme }) => theme.media.mobile} {
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
  @media ${({ theme }) => theme.media.mobile} {
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

  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 0 2em 0;

    & > div > p {
      font-size: ${({ theme }) => theme.calcRem(12)};
    }
  }
`;

export const ListTableBtn = styled(Button)`
  margin-right: ${props => props.firstchild && '8px'};

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin: 0 0 1em 0;
  }
`;
