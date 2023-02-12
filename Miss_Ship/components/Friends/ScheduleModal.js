import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, DatePicker, Input, Row, Select } from 'antd';

import { sendMessage, scheduling } from '@actions/schedule';
import { CLOSE_SCHEDULE_MODAL, ANONYMOUS_MODAL_SELECT_USER } from '@reducers/schedule';
import {
  ScheduleModalWrapper,
  ScheduleModalForm,
  ScheduleModalInput,
  ScheduleModalBtn,
} from '@style/friends/scheduleModal';

const ScheduleModal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    friendsInfo,
    anonymousScheduleModalVisible,
    scheduleModalVisible,
    messageNowModalVisible,
    scheduleInfo,
    sendMessageLoading,
    schedulingLoading,
  } = useSelector(state => state.schedule);

  const onSubmitForm = useCallback(
    e => {
      let values;

      if (!messageNowModalVisible) {
        const fullDate = e.date._d;
        const year = fullDate.getFullYear();
        const month = `0${1 + fullDate.getMonth()}`.slice(-2);
        const day = `0${fullDate.getDate()}`.slice(-2);

        values = {
          friendId: scheduleInfo._id,
          message: e.message,
          scheduledDate: `${year}-${month}-${day}`,
        };

        dispatch(scheduling(values));
      } else {
        values = {
          friendId: scheduleInfo._id,
          message: e.message,
        };

        dispatch(sendMessage(values));
      }
    },
    [scheduleInfo],
  );

  const onCloseSchedule = useCallback(() => {
    dispatch(CLOSE_SCHEDULE_MODAL());
  }, []);

  const onChangeName = useCallback(e => {
    dispatch(ANONYMOUS_MODAL_SELECT_USER(e));
  }, []);

  useEffect(() => {
    if (scheduleInfo)
      form.setFieldsValue({
        to: scheduleInfo?.name,
        birthday: scheduleInfo?.dateOfBirth,
      });
  }, [form, scheduleInfo]);

  return (
    <ScheduleModalWrapper
      visible={scheduleModalVisible}
      onCancel={onCloseSchedule}
      title={messageNowModalVisible ? 'Send a message' : 'Schedule a message'}
      footer={null}
    >
      <ScheduleModalForm
        $messagenowmodalvisible={messageNowModalVisible}
        form={form}
        name="schedule"
        layout="vertical"
        requiredMark={false}
        onFinish={onSubmitForm}
      >
        {anonymousScheduleModalVisible ? (
          <Form.Item name="to" label="To">
            <Select placeholder="Recipient" onChange={onChangeName} disabled={scheduleInfo && true}>
              {friendsInfo?.map(v => {
                return (
                  <Select.Option key={v._id} value={v._id}>
                    {v.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        ) : (
          <Form.Item name="to" label="To">
            <ScheduleModalInput placeholder="Recipient" allowClear disabled={scheduleInfo && true} />
          </Form.Item>
        )}

        {messageNowModalVisible || (
          <>
            <Form.Item name="birthday" label="Birthday">
              <ScheduleModalInput placeholder="Birthday day" allowClear disabled={scheduleInfo && true} />
            </Form.Item>
            <Form.Item
              name="date"
              label="Text Date"
              rules={[{ type: 'object', required: true, message: 'Please select date' }]}
            >
              <DatePicker />
            </Form.Item>
          </>
        )}

        <Form.Item
          name="message"
          label="Text Message"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please enter your message',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Enter message"
            allowClear
            showCount
            maxLength={160}
            autoSize={{
              minRows: 2,
              maxRows: 10,
            }}
          />
        </Form.Item>

        <Form.Item>
          <Row justify="end">
            <ScheduleModalBtn firstchild="true" size="large" onClick={onCloseSchedule}>
              Cancel
            </ScheduleModalBtn>
            <ScheduleModalBtn
              type="primary"
              size="large"
              htmlType="submit"
              loading={messageNowModalVisible ? sendMessageLoading : schedulingLoading}
            >
              {messageNowModalVisible ? 'Send' : 'Reservation'}
            </ScheduleModalBtn>
          </Row>
        </Form.Item>
      </ScheduleModalForm>
    </ScheduleModalWrapper>
  );
};

export default ScheduleModal;
