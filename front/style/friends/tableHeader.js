import styled from 'styled-components';
import { Row, Space, Button } from 'antd';

export const ListTableWrapper = styled(Row)`
  width: 100%;
  background-color: white;
  padding: 1em 2em;

  & > h2 {
    font-size: ${({ theme }) => theme.calcRem(16)};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1em 1.5em;

    & > h2 {
      width: 100%;
      margin-bottom: 2em;
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
    margin: 0 0 1em 0;
  }
`;

export const ListTableBtn = styled(Button)`
  margin-right: ${props => props.firstChild && '8px'};

  @media ${({ theme }) => theme.media.mobile} {
    width: 70%;
    margin: 0 0 1em 0;
  }
`;
