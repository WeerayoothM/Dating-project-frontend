import React, { useState } from 'react';
import { Steps, Button, message, Row, Col, notification, Affix } from 'antd';
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
        axios.post('/auth/register', { ...formValue, target: tasteValue[0], imageUrl: mediaValue })
            .then(res => {
                console.log(res);
                message.success('Processing complete!');
                props.history.push('/');
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
            <Col span={10} style={{ height: "100vh", position: 'relative' }} >
                <Row justify="center" className="left-content left-container" style={{ width: '40%', position: 'fixed', zindex: 3 }}  >
                    <h1 className="welcome-text">REGISTER</h1>
                </Row>
            </Col>
            <Col span={14} style={{ height: "100vh", padding: "0 20px", width: "100%" }}>
                {/* <Row justify='center' style={{ height: '60px', padding: '20px 0', backgroundColor: 'white' }} > */}
                <Affix style={{ width: '90%', margin: '0 auto' }}>
                    <Row justify="center" style={{ width: '100%', padding: '20px 0', zindex: 10, backgroundColor: '#fff', borderBottom: '1px solid hsl(0,0%,80%)' }} >
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </Row>
                </Affix>
                {/* </Row> */}
                <Row justify="center" style={{ width: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zindex: 1, backgroundColor: 'transparent' }} >
                    <div className="right-content">
                        {steps[current].content}
                    </div>
                </Row>

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
        </Row >
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