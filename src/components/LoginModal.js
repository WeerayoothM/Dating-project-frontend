import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import LoginForm from './LoginForm';

function LoginModal(props) {
    const { visible, setVisible } = props;

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    return (

        <>
            <Modal
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <LoginForm />
            </Modal>
        </>

    )
}

export default LoginModal
