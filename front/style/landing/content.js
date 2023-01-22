import styled from 'styled-components';
import { Row, Col } from 'antd';

export const ContentWrapper = styled(Col)`
  padding: 7.5em 0;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 3em 0;
  }
`;

export const LandingContentHeader = styled(Col)`
  text-align: center;

  & > h2 {
    font-size: ${({ theme }) => theme.calcRem(38)};
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  & > p {
    font-size: ${({ theme }) => theme.calcRem(14)};
    font-weight: 700;
    opacity: 45%;
    margin-bottom: 5em;
  }

  & > img {
    width: 27.5em;
    height: 20em;
    box-shadow: 0px 6px 8px 0px #00000026;
    margin-bottom: 5em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    & > h2 {
      font-size: ${({ theme }) => theme.calcRem(20)};
    }

    & > p {
      font-size: ${({ theme }) => theme.calcRem(10)};
      margin-bottom: 3em;
    }

    & > img {
      width: 20em;
      height: 10em;
      margin-bottom: 3.5em;
    }
  }
`;

export const LandingContentDivider = styled.div`
  width: 60px;
  height: 2px;
  background-color: #d9d9d9;
  margin: auto;
  margin-bottom: 4.5em;

  @media ${({ theme }) => theme.media.mobile} {
    width: 40px;
    margin-bottom: 3em;
  }
`;

export const FeaturesWrapper = styled(Row)`
  ${({ theme }) => theme.flexColumnSet()};
`;

export const LandingFeatures = styled(Col)`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 5em;

  & > div {
    margin-right: 10em;
  }

  & > div > h3 {
    font-size: ${({ theme }) => theme.calcRem(35)};
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  & > div > p {
    width: 20em;
    font-size: ${({ theme }) => theme.calcRem(14)};
    font-weight: 700;
    opacity: 45%;
  }

  & > img {
    width: 27.5em;
    height: 20em;
    box-shadow: 0px 6px 8px 0px #00000026;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 3em;

    & > div {
      margin-right: 1.5em;
    }

    & > div > h3 {
      font-size: ${({ theme }) => theme.calcRem(20)};
    }

    & > div > p {
      width: 12em;
      font-size: ${({ theme }) => theme.calcRem(10)};
    }

    & > img {
      width: 10em;
      height: 8em;
    }
  }
`;
