import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import LoginForm from './LoginForm';

function LoginModal(props) {
    // const [visible, setVisible] = useState(false);
    const { visible, setVisible } = props;

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = e => {
        console.log(e);
        setVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };


    return (

        <>
            {/* <button className="btn-4" onClick={showModal}>Login</button> */}
            <Modal
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                style={{ borderRadius: "30px", backgroundColor: "transparent" }}
                bodyStyle={{ borderRadius: "30px", backgroundColor: "transparent" }}
            >
                <LoginForm />
            </Modal>
        </>

    )
}

export default LoginModal
