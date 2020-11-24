import { Avatar, Col, Row } from 'antd'
import React from 'react'
import errorLogo from '../Images/5270.jpg'

function NotFound() {
    return (
        <Row>
            <Col span={12}>
                <h1>ERROR</h1>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
            </Col>
            <Col span={12}>
                <img src={errorLogo} alt="" />
            </Col>
        </Row>
    )
}

export default NotFound
