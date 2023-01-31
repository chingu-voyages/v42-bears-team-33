import styled from 'styled-components';
import { Steps, Form, Row, DatePicker, Button, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const FriendSettingWrapper = styled.div`
  padding: 5.5em 10em 0 10em;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 4em 7em 4em 7em;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 2.5em 2em 4em 2em;
  }
`;

export const FriendSettingHeader = styled(Steps)`
  margin-bottom: 60px;

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 30px;
    ${({ theme }) => theme.flexSet()};
  }
`;

export const FriendSettingFormWrapper = styled(Form)`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 0 1em;
`;

export const SettingItemsWrapper = styled(Row)`
  width: 100%;

  & > div {
    margin-bottom: 1.2em;
  }

  & > div > div {
    margin-bottom: 0;
  }
`;

export const SettingPrefix = styled(Select)`
  width: 70px !important;
`;

export const SettingDatePicker = styled(DatePicker)`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

export const DeleteItemBtn = styled(DeleteOutlined)`
  transition: opacity 250ms ease-in;
  line-height: 2.5;

  &:hover {
    opacity: 50%;
  }

  &:active {
    opacity: 100%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    font-size: ${({ theme }) => theme.calcRem(17)};
    line-height: 0;
  }
`;

export const AddItemBtn = styled(Button)`
  width: 100%;
  margin-bottom: 3.5em;
`;

export const SkipSettingBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.button};
  margin-right: 1.5em;
`;
