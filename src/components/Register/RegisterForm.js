import {
    Form,
    Input,
    Tooltip,
    Button,
    DatePicker,
    notification,
    Select,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import FooterRegister from './FooterRegister';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 9 },
        lg: { span: 8 },
        xl: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 15 },
        md: { span: 16 },
        md: { span: 17 },

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
    const formRef = useRef(null);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const onFinish = values => {
        const { name, phone, password, email, gender, motto, birthday } = values;
        props.setFormValue({ name, phone, password, email, gender, motto, latitude, longitude, "birthday": Math.round(birthday.valueOf() / 1000) })
        props.next();
    };

    const onGenderChange = () => {
        //
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        },
            function (error) {
                notification.warning({
                    description: 'please access your location'
                })
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }, []);

    return (
        <Form
            {...formItemLayout}
            form={form}
            ref={formRef}
            name="register"
            onFinish={onFinish}
            style={{ width: '90%' }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label={
                    <span>
                        Name&nbsp;
                      <Tooltip title="What do you want others to call you?">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }
                rules={[{ required: false, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input placeholder="Name" />
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
                <Input placeholder="E-mail" />
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
                <Input.Password placeholder="Password" />
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
                <Input.Password placeholder="Comfirm Password" />
            </Form.Item>

            <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please input your gender!' }]}>
                <Select
                    placeholder="Select your gender"
                    onChange={onGenderChange}
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>


            <Form.Item label="DatePicker" name="birthday" rules={[{ required: false, message: 'Please input your birthday!' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: false, message: 'Please input your phone number!' }]}
            >
                <Input style={{ width: '100%' }} placeholder="Phone Number" />
            </Form.Item>

            <Form.Item name='motto' label="Motto">
                <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <FooterRegister onFinish={onFinish} current={props.current} next={props.next} prev={props.prev} />
            </Form.Item>

        </Form>
    )

}

export default RegisterForm


