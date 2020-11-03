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

function UploadImage(props) {
    const [imageUrl, setImageUrl] = useState('');
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
            {/* <Button type="primary" htmlType="submit">
                Submit
            </Button> */}
        </Form>
    )
}

export default UploadImage

