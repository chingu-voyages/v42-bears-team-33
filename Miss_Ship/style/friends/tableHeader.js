import styled from 'styled-components';
import { Row, Button } from 'antd';

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

export const ListTableBtn = styled(Button)`
  width: ${props => props.firstchild && '11em'};
  margin-right: ${props => props.firstchild && '0.5em'};

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin: 0 0 1em 0;
    display: ${props => props.$addfriendsvisible && 'none'};
  }
`;
