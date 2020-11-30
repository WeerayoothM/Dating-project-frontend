import React, { useState } from 'react';
import { Affix, Avatar, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import Logo from '../../Images/Untitled-2.svg'

function Navbar(props) {
    return (
        <>
            <Affix offsetTop={20} style={{ width: '100%' }}>
                {/* <div style={{ position: 'fixed', width: '100%' }}> */}

                <Row data-aos="zoom-out" data-aos-delay="50" justify="space-between" align="middle" style={{ padding: "0 70px" }} >
                    <Col >
                        <div style={{ fontSize: "2.5rem", color: "#FFFEF2" }} >
                            {/* <i class="fas fa-heartbeat"></i> */}
                            {/* <Avatar size={70} src={Logo} /> */}
                            <img src={Logo} style={{ width: '50px', height: '50px', padding: '0', margin: '0' }} />
                            &nbsp;
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

                {/* </div> */}
            </Affix>
        </>
    )
}

export default withRouter(Navbar);
