import React from 'react';
import { Modal } from 'antd';
import LoginForm from './LoginForm';
import './login.css'

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
                <LoginForm setRole={props.setRole} />
            </Modal>
        </>

    )
}

export default LoginModal
