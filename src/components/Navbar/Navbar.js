import React, { useState } from 'react';
import { Affix, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';

function Navbar(props) {
    const [top] = useState(10);
    return (
        <>
            <Affix offsetTop={top} >
                <Row justify="space-between" align="middle" style={{ padding: "0 70px" }} >
                    <Col >
                        <div style={{ fontSize: "2.5rem", color: "white" }} >
                            <i class="fas fa-heartbeat"></i> &nbsp;
                            {/* <img src={"https://toppng.com/uploads/preview/love-instagram-heart-logo-11562890691vkp75hdcke.png"} /> */}
                            <span>Dating</span>
                        </div>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "flex-end" }} >
                        {/* <Button className="btn-login" type="primary" onClick={() => props.history.push('/login')}>
                            Login
                        </Button> */}
                        <button className="btn-4" onClick={props.showModal}>LOG IN</button>

                        {/* <LoginModal /> */}
                    </Col>
                </Row>

            </Affix>
        </>
    )
}

export default withRouter(Navbar);
