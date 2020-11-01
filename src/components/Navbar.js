
import React, { useState } from 'react';
import { Affix, Button, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';

function Navbar(props) {
    const [top, setTop] = useState(10);
    return (
        <>
            <Affix offsetTop={top} >
                <Row justify="space-around" align="middle" style={{ border: "1px solid" }} >
                    <Col span={4} style={{ border: "1px solid" }} >
                        <div style={{ fontSize: "2.5rem" }} >
                            <i class="fas fa-heartbeat"></i>
                            <span>Dating</span>
                        </div>
                    </Col>
                    <Col span={20} style={{ display: "flex", justifyContent: "flex-end" }} >
                        <Button type="primary" onClick={() => props.history.push('/login')}>
                            Login
                    </Button>
                    </Col>
                </Row>

            </Affix>
        </>
    )
}

export default withRouter(Navbar);
