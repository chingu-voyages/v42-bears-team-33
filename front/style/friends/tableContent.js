import styled from 'styled-components';
import { Table, Badge } from 'antd';

export const TableContentWrapper = styled(Table)`
  width: 100%;

  @media ${({ theme }) => theme.media.mobile} {
    .ant-table-cell {
      font-size: ${({ theme }) => theme.calcRem(11)};
      padding: 0.3em;
    }
  }
`;

export const TableContentHeader = styled.div`
  font-weight: 700;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.calcRem(11)};
  }
`;

export const TableContentBadge = styled(Badge)`
  @media ${({ theme }) => theme.media.mobile} {
    & > span {
      font-size: ${({ theme }) => theme.calcRem(11)};
    }
  }
`;

export const TableContentBtn = styled.button`
  color: ${({ theme }) => theme.colors.button};
  transition: opacity 250ms ease-in;

  &:hover {
    opacity: 50%;
  }

  &:active {
    opacity: 100%;
  }
`;
