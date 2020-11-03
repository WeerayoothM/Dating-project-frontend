import {
    Select, Tag, Form,
    Input,
    Tooltip,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker,
    Upload,
    Avatar,
    Image,
    Divider,
} from 'antd';
import React, { useState } from 'react';
import { InboxOutlined, QuestionCircleOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';

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
    const { current } = props;
    const [imageUrl, setImageUrl] = useState('');

    const options = [{ label: 'male', value: 'gold' }, { label: 'female', value: 'cyan' }, { label: 'binary', value: 'green' }, { label: 'other', value: 'lime' }]

    const onSelect = (e) => {
        console.log(e)
    }

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const normFile = e => {
        setImageUrl("https://os.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg")
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };


    switch (current) {
        case 0:
            return (
                <div style={{ width: "100%" }}>
                    <h1>Select your Taste</h1>
                    <Select
                        mode="multiple"
                        size="large"
                        showArrow
                        defaultValue={['gold', 'cyan']}
                        style={{ width: '50%' }}
                        options={options}
                        tagRender={tagRender}
                        onSelect={onSelect}
                    />
                </div>
            )


        case 1:
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
                        name="nickname"
                        label={
                            <span>
                                Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
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
                                required: true,
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
                                required: true,
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
                                required: true,
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
                        rules={[{ required: true, message: 'Please input your gender!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="DatePicker">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item name={['user', 'motto']} label="Motto">
                        <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
                    </Form.Item>

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
                    </Form.Item>
                    {/* <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                  </Button>
                    </Form.Item> */}
                </Form>
            )


        case 2:
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{ width: '70%' }}
                    scrollToFirstError
                >
                    <Avatar
                        size={200}
                        icon={imageUrl ? <Image src={imageUrl} /> : <UserOutlined />}
                    />

                    <Divider />

                    <Form.Item
                        name="upload"
                        label="Upload Profile Picture"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            )
    }

}

export default RegisterForm


function tagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
        <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
        </Tag>
    );
}