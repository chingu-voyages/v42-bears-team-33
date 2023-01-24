import React, { useCallback } from 'react';
import { Modal, Form, DatePicker, Input, Button, Row } from 'antd';
import PropTypes from 'prop-types';

const ScheduleModal = ({ scheduleModal, onClickSchedule }) => {
  const [form] = Form.useForm();

  const onCloseModal = useCallback(() => {
    onClickSchedule();
  }, []);

  const onSubmitForm = useCallback(fieldsValue => {
    console.log(fieldsValue);
  }, []);

  return (
    <>
      <Modal visible={scheduleModal} onCancel={onCloseModal} title="Schedule a message" footer={null}>
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
              <Button size="large">Cancel</Button>
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

ScheduleModal.propTypes = {
  scheduleModal: PropTypes.bool,
  onClickSchedule: PropTypes.func,
};

export default ScheduleModal;
