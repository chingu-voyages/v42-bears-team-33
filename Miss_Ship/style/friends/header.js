import styled from 'styled-components';
import { Row } from 'antd';

export const FriendsWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  ${({ theme }) => theme.flexColumnSet('start')};
  background-color: ${props => (props.friendsInfo ? '#f5f5f5' : 'white')};
  padding: ${props => (props.friendsInfo ? '2.5em 6.5em' : '3.5em 6.5em')};

  @media ${({ theme }) => theme.media.tablet} {
    padding: ${props => (props.friendsInfo ? '1.5em 1em' : '3em 1em')};
  }
`;

export const FriendsHeader = styled(Row)`
  display: ${props => (props.$addfriendsvisible ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.friendsinfo ? 'flex-start' : 'center')};

  width: 100%;
  background-color: white;
  padding: 1.4em 1.6em;
  margin-bottom: 1.5em;

  & > .ant-divider {
    display: none;
    margin: 0;
  }

  & > img {
    margin-bottom: 2.5em;
  }

  & > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 10em;
  }

  & > header {
    font-weight: 700;
    font-size: ${props => (props.friendsinfo ? '1.2rem' : '1rem')};
    margin-bottom: ${props => (props.friendsinfo ? '0.7em' : '2.5em')};
  }

  & > p {
    font-size: ${({ theme }) => theme.calcRem(14)};
  }

  & > p > button,
  & > p > a {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.button};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1em 1.2em 0 1.2em;
    margin-bottom: 0;

    & > .ant-divider {
      display: block;
    }

    & > img {
      width: 25em;
      margin-bottom: 2em;
    }

    & > button {
      margin-bottom: 2em;
    }

    & > header {
      font-size: ${props => (props.friendsinfo ? '1rem' : '0.85rem')};
      margin-bottom: ${props => (props.friendsinfo ? '1em' : '2em')};
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(12)};
      margin-bottom: 2em;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > img {
      width: 20em;
      margin-bottom: 1.5em;
    }

    & > button {
      font-size: ${({ theme }) => theme.calcRem(10)};
      margin-bottom: 1.5em;
    }

    & > header {
      font-size: ${props => props.friendsinfo || '0.6rem'};
      margin-bottom: ${props => props.friendsinfo || '1.5em'};
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(11)};
      margin-bottom: 1.5em;
    }
  }
`;
