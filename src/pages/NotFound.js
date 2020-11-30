import { Col, Row } from 'antd'
import React from 'react'
import errorLogo from '../Images/5270.jpg'

function NotFound() {
    return (
        <Row justify="center" align="middle" style={{ height: "100vh", width: '100%' }}>
            <Col span={5} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4vw', padding: '0', margin: '0', lineHeight: '4vw' }}>ERROR</h1>
                <h1 style={{ fontSize: '10vw', padding: '0', margin: '10px 0', lineHeight: '12vw', fontFamily: 'sans-serif' }}>404</h1>
                <h2 style={{ padding: '0', margin: '0' }}>PAGE NOT FOUND</h2>
            </Col >
            <Col span={10}>
                <img src={errorLogo} style={{ width: '100%', objectFit: "cover" }} alt="" />
            </Col>
        </Row >
    )
}

export default NotFound
