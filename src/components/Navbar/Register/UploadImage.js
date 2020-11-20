import {
    Form,
    Upload,
    Avatar,
    Divider,
    message
} from 'antd';
import React, { useState } from 'react';
import { InboxOutlined, UserOutlined } from '@ant-design/icons';
import { BASE_BACKEND_URL } from '../../config/constants'

const { Dragger } = Upload;


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

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const { setMediaValue } = props;

    // const onFinish = values => {
    //     axios.post(`${BASE_BACKEND_URL}/users/register`, { username, password, name, profileUrl: fileName })
    //         .then(res => {
    //             notification.success({
    //                 description: "Signup successfully"
    //             });
    //             props.history.push("/");
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             notification.error({
    //                 description: "Something went wrong."
    //             });
    //         });
    // };

    const propsUpload = {
        name: 'img',
        multiple: false,
        action: `${BASE_BACKEND_URL}/uploads/`,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setMediaValue(info.file.response.url)
                setImageUrl(`${BASE_BACKEND_URL}/${info.file.response.url}`)

                console.log(info.file.response.url)
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            style={{ width: '80%' }}
            scrollToFirstError
        >
            <Avatar
                size={200}
                icon={imageUrl ? <img src={imageUrl} style={{ objectFit: 'cover', objectPosition: '50% 50%' }} alt="profile picture" /> : <UserOutlined />}
            />

            <Divider />

            {/* <Form.Item
                name="upload"
                label="Upload Profile Picture"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item> */}

            <Form.Item style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Dragger {...propsUpload}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </Dragger>
            </Form.Item>

        </Form>
    )
}

export default UploadImage

