import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, DatePicker, Input, Button, Row } from 'antd';

import { closeScheduleModal } from '@reducers/schedule';

const ScheduleModal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { scheduleModalVisible } = useSelector(state => state.schedule);

  const onSubmitForm = useCallback(fieldsValue => {
    console.log(fieldsValue);
  }, []);

  const onCloseSchedule = useCallback(() => {
    dispatch(closeScheduleModal());
  }, []);

  return (
    <>
      <Modal visible={scheduleModalVisible} onCancel={onCloseSchedule} title="Schedule a message" footer={null}>
        <Form
          form={form}
          name="schedule"
          layout="vertical"
          requiredMark={false}
          onFinish={onSubmitForm}
          initialValues={{ to: 'Cody Fisher', birthday: '1992-06-23' }}
        >
          <Form.Item name="to" label="To">
            <Input disabled />
          </Form.Item>
          <Form.Item name="birthday" label="Birthday">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="date"
            label="Text Date"
            rules={[{ type: 'object', required: true, message: 'Please select date' }]}
          >
            <DatePicker />
          </Form.Item>
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
                maxRows: 4,
              }}
            />
          </Form.Item>

          <Form.Item>
            <Row justify="end">
              <Button size="large" onClick={onCloseSchedule}>
                Cancel
              </Button>
              <Button type="primary" size="large" htmlType="submit">
                Save
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ScheduleModal;
