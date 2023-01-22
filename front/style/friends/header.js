import styled from 'styled-components';
import { Row } from 'antd';

export const FriendsWrapper = styled.div`
  height: 100%;
  ${({ theme }) => theme.flexColumnSet('start')};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2.5em 6.5em;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1.5em 1em;
  }
`;

export const FriendsHeader = styled(Row)`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')}
  width: 100%;
  background-color: white;
  padding: 1.4em 1.6em;
  margin-bottom: 1.5em;

  & > header {
    font-size: ${({ theme }) => theme.calcRem(20)};
    font-weight: 700;
    margin-bottom: 0.7em;
  }

  & > p {
    font-size: ${({ theme }) => theme.calcRem(16)};
  }

  & > p > button,
  & > p > a {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.button};
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1em 1.2em;
    margin-bottom: 1.2em;

    & > header {
      font-size: ${({ theme }) => theme.calcRem(18)};
      margin-bottom: 1em;
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(13)};
    }
  }
`;
