import styled from 'styled-components';
import { Modal, Form, Button } from 'antd';

export const ScheduleModalWrapper = styled(Modal)`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 27em !important;

  .ant-modal-header {
    height: 8vh;
    font-weight: 700;
  }

  .ant-modal-title {
    font-weight: 700;
  }

  .ant-modal-body {
    height: 92vh;
  }

  @media ${({ theme }) => theme.media.mobile} {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 20em !important;

    .ant-modal-body {
      height: 60vh;
      padding: 0 1.5em;
    }
  }
`;

export const ScheduleModalForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0.7em;
  }

  .ant-form-item:nth-child(3),
  .ant-form-item:nth-child(4) {
    margin-bottom: 2em;
  }

  .ant-form-item-label {
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.mobile} {
    .ant-form-item {
      margin-bottom: 0.5em;
    }
  }
`;

export const ScheduleModalBtn = styled(Button)`
  width: 7em;
  margin-right: ${props => props.firstchild && '0.5em'};

  @media ${({ theme }) => theme.media.mobile} {
    width: 4.5em;
  }
`;
