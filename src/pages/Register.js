import React, { useState } from 'react';
import { Steps, Button, message, Row, Col, notification } from 'antd';
import RegisterForm from '../components/Register/RegisterForm';
import SelectTaste from '../components/Register/SelectTaste';
import UploadImage from '../components/Register/UploadImage';
import axios from '../config/axios';
import { withRouter } from 'react-router-dom';

const { Step } = Steps;

function Register(props) {
    const [current, setCurrent] = useState(0);
    const [formValue, setFormValue] = useState(null);
    const [tasteValue, setTasteValue] = useState(null);
    const [mediaValue, setMediaValue] = useState(null);

    const onSubmit = () => {
        console.log("formvalue :", formValue)
        axios.post('/auth/register', { ...formValue, target: tasteValue[0] })
            .then(res => {
                console.log(res)
                message.success('Processing complete!')
                props.history.push('/home');
            })
            .catch(err => {
                console.log(err)
                notification.error({
                    description: "Login failed"
                })
            })
    }

    const steps = [
        {
            title: 'Select Taste',
            content: <SelectTaste next={next} current={current} tasteValue={tasteValue} setTasteValue={setTasteValue} />
        },
        {
            title: 'Account Detail',
            content: <RegisterForm next={next} current={current} formValue={formValue} setFormValue={setFormValue} />
        },
        {
            title: 'Upload Profile',
            content: <UploadImage current={current} mediaValue={mediaValue} setMediaValue={setMediaValue} />
        },
    ];

    function next(e) {
        // e.preventDefault();
        setCurrent(current + 1);
    }

    function prev(e) {
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
                    {steps[current].content}
                </div>

                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={prev}>
                            Previous
                        </Button>
                    )}
                    {/* {current < steps.length - 1 && (
                        <Button type="primary" onClick={next}>
                            Next
                        </Button>
                    )} */}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={onSubmit}>
                            Done
                        </Button>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default withRouter(Register)









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