import styled from 'styled-components';
import { Row } from 'antd';

export const LandingContentWrapper = styled(Row)`
  padding: 5em 8em;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 3em 4em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1.5em 2em;
  }
`;

export const LandingContentHeader = styled(Row)`
  width: fit-content;
  margin-bottom: 8em;

  & > div > header {
    font-size: ${({ theme }) => theme.calcRem(38)};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 6em;

    & > div > header {
      font-size: ${({ theme }) => theme.calcRem(23)};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 4em;

    & > div > header {
      font-size: ${({ theme }) => theme.calcRem(16)};
    }
  }
`;

export const LandingContentFeature = styled(Row)`
  width: 100%;
  margin-bottom: 6em;
  ${({ theme }) => theme.flexSet('space-between')};

  & > div > h2 {
    color: ${({ theme }) => theme.colors.button};
    font-size: ${({ theme }) => theme.calcRem(36)};
    margin-bottom: 1em;
    font-weight: 700;
  }

  & > div > p {
    font-size: ${({ theme }) => theme.calcRem(18)};
    font-weight: 700;
    opacity: 45%;
  }

  & > div > img {
    margin: 0 0 0 auto;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 5em;

    & > div > h2 {
      font-size: ${({ theme }) => theme.calcRem(22)};
      margin-bottom: 0.8em;
    }

    & > div > p {
      font-size: ${({ theme }) => theme.calcRem(14)};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    text-align: center;
    margin-bottom: 2em;

    & > div > h2 {
      font-size: ${({ theme }) => theme.calcRem(15)};
    }

    & > div > p {
      font-size: ${({ theme }) => theme.calcRem(12)};
      margin-bottom: 1.2em;
    }

    & > div > img {
      padding: 1em;
    }
  }
`;
