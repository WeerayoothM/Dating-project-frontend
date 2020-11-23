import {
    Avatar,
    Divider,
    notification
} from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import axios from '../../config/axios';


function UploadImage(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const { setMediaValue } = props;

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            notification.error({
                description: 'something went wrong!'
            })
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', { data: base64EncodedImage })
            setFileInputState('');
            setImageUrl(res.data.url)
            setMediaValue(res.data.url)
            setSuccessMsg('Image uploaded successfully');
            notification.success({ description: 'Upload success' })
        } catch (err) {
            console.error(err);
            notification.error({ description: 'Something went wrong' })
        }
    };

    return (
        <form form onSubmit={handleSubmitFile} className="form" >
            <Avatar
                size={200}
                icon={imageUrl ? <img src={imageUrl} style={{ objectFit: 'cover', objectPosition: '50% 50%' }} alt="profile picture" /> : <UserOutlined />}
            />
            <Divider />
            <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-input"
            />
            <button className="btn" type="submit">
                Submit
            </button>
        </form >
    )
}

export default UploadImage

