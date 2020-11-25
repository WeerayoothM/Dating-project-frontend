import { Button, Col, Row } from 'antd'
import React from 'react'
import './ChatMessage.css'
import { SendOutlined } from "@ant-design/icons";


function ChatMessage() {
    return (
        <Row data-aos='slide-up' className="chat-container" >
            <Col span={24} style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%'
            }}>
                <div className="chat-message">
                </div>
                <div className="chat-input" style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <input type="text" className='input-message' />
                    <Button shape="circle" icon={<SendOutlined style={{ fontSize: '1.25rem' }} />} style={{ border: 'none', shadow: 'none' }} htmlType='submit' ></Button>
                </div>
            </Col>
        </Row >
    )
}

export default ChatMessage
