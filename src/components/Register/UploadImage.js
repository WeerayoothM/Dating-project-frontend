import {
    Avatar,
    Divider,
    Image,
    notification
} from 'antd';
import React, { useState } from 'react';
import { LoadingOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import axios from '../../config/axios';
import FooterRegister from './FooterRegister';


function UploadImage(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [loading, setLoading] = useState(false);
    const { setMediaValue } = props;

    const handleFileInputChange = (e) => {
        // const file = e.target.files[0];
        // setSelectedFile(file);
        // e.preventDefault();
        setLoading(true)
        setFileInputState(e.target.value);
        if (!e.target.value) return;

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

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
            setImageUrl(res.data.url)
            setMediaValue(res.data.url)
            setLoading(false)

            notification.success({ description: 'Upload success' })
        } catch (err) {
            console.error(err);
            notification.error({ description: 'Something went wrong' })
        }
    };

    return (
        <>

            <form onSubmit={handleSubmitFile} className="form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <Image
                    width={250}
                    src={imageUrl}
                    icon={imageUrl ? <img src={imageUrl} style={{ width: 'auto', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} alt="profile picture" /> : <UserOutlined />}
                />
                <Avatar size={250}
                    src={imageUrl}
                    icon={imageUrl ? <img src={imageUrl} style={{ width: 'auto', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} alt="profile picture" /> : <UserOutlined />}/>
                <Divider />
                <label class="custom-file-upload">
                    <UploadOutlined /> Custom Upload
                <input
                        id="fileInput"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        className="upload-image"
                        style={{ display: 'none' }}
                    />
                </label>
                <br />
                {loading && <LoadingOutlined />} {fileInputState || "No flie choosen"}

            </form >
            <FooterRegister onSubmit={props.onSubmit} current={props.current} next={props.next} prev={props.prev} />
        </>
    )
}

export default UploadImage

