import styled from 'styled-components';
import { Row } from 'antd';

export const FriendsWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FriendsHeader = styled(Row)`
  position: absolute;
  top: 15%;
  left: 12%;
  right: 12%;
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  background-color: white;
  padding: 1.4em 1.6em;
  margin-bottom: 1.5em;

  & > header {
    font-size: ${({ theme }) => theme.calcRem(20)};
    font-weight: 700;
    margin-bottom: 0.7em;
  }

  & > span {
    font-size: ${({ theme }) => theme.calcRem(16)};
  }

  & > span > button,
  & > span > a {
    color: ${({ theme }) => theme.colors.button};
  }

  @media ${({ theme }) => theme.media.desktop} {
    top: 10%;
    left: 5%;
    right: 5%;
    padding: 1em 1.2em;
    margin-bottom: 1.2em;

    & > header {
      font-size: ${({ theme }) => theme.calcRem(18)};
      margin-bottom: 1em;
    }

    & > span {
      font-size: ${({ theme }) => theme.calcRem(14)};
    }
  }
`;
