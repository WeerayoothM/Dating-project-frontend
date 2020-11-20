import {
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
    DatePicker,
} from 'antd';
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function RegisterForm(props) {

    const [form] = Form.useForm();

    const onFinish = values => {
        const { name, phone, password, email, gender, motto, birthday } = values;
        console.log(birthday.valueOf());
        props.setFormValue({ name, phone, password, email, gender, motto, "birthday": Math.round(birthday.valueOf() / 1000) })
        props.next();
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ width: '70%' }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label={
                    <span>
                        Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }
                rules={[{ required: false, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: false,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: false,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: false,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="gender"
                label={
                    <span>
                        Gender&nbsp;
                            </span>
                }
                rules={[{ required: false, message: 'Please input your gender!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="DatePicker" name="birthday" rules={[{ required: false, message: 'Please input your birthday!' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: false, message: 'Please input your phone number!' }]}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name='motto' label="Motto">
                <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
            </Form.Item>
            {/* 
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" >
                    Register
                </Button>
            </Form.Item>
        </Form>
    )

}

export default RegisterForm


