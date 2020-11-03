import React, { useState } from 'react';
import { Steps, Button, message, Row, Col } from 'antd';
import RegisterForm from '../components/Register/RegisterForm';
// import '../components/Register/register.css'

function Register() {
    const [current, setCurrent] = useState(0)
    const { Step } = Steps;
    const steps = [
        {
            title: 'Select Taste',
        },
        {
            title: 'Account Detail',
        },
        {
            title: 'Upload Profile',
        },
    ];

    const next = (e) => {
        e.preventDefault();
        setCurrent(current + 1);
    }

    const prev = (e) => {
        e.preventDefault();
        setCurrent(current - 1);
    }
    return (
        <Row justify="center" style={{ height: "100vh" }}>
            <Col span={11} className="left-container" style={{ height: "100vh" }} >
                <div className="left-content">
                    <h1 className="welcome-text">REGISTER</h1>
                </div>
            </Col>
            <Col span={13} style={{ height: "100vh", padding: "20px" }}>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="right-content">
                    <RegisterForm current={current} />
                </div>

                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={prev}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={next}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Register









//     .steps - content {
//     margin - top: 16px;
//     border: 1px dashed #e9e9e9;
//     border - radius: 2px;
//     background - color: #fafafa;
//     min - height: 200px;
//     text - align: center;
//     padding - top: 80px;
// }

// .steps - action {
//     margin - top: 24px;
// }