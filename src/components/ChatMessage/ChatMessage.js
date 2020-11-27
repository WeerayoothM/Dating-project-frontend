import { Button, Col, notification, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import './ChatMessage.css'
import { SendOutlined } from "@ant-design/icons";
import LocalStorageService from '../../services/localStorage'
import { useHistory } from 'react-router-dom';


const token = LocalStorageService.getToken();


function ChatMessage(props) {
    const { message, setMessage } = props;
    const socket = props.socket;
    const [inputValue, setInputValue] = useState("");
    const history = useHistory()

    const user = LocalStorageService.getUserProfile();

    useEffect(() => {
        socket.on('new_message', (data) => {
            const temp = [...message];
            if (props.selectUser === data.userId || user.id === data.userId) {
                temp.push({ message: data.message, userId: data.userId, oppositeUserId: props.selectUser })
            }
            console.log(temp)
            setMessage(temp)
        })
        socket.on('token-expired', (data) => {
            notification.error({
                description: 'token-expired'
            })
            LocalStorageService.clearToken()
            history.push('/')
            socket.close()
        })
    })

    const send = (e) => {
        e.preventDefault()
        console.log(user.id)
        socket.emit('sent_message', { message: inputValue, userId: user.id })
        setInputValue('')
    }

    return (
        <Row data-aos='slide-up' className="chat-container" >
            <Col span={24} style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%'
            }}>
                <div className="chat-log">
                    <span>{props.selectUser}</span>
                    {message.map((value) => {
                        if (value.userId === user.id && value.oppositeUserId === props.selectUser) {
                            return (
                                <>
                                    <div className='chat-container--sender'>
                                        <div className="chat-box green-box--sender">
                                            <span className="chat-text">{value.message}</span>
                                            <div className="white-shape white-shape--sender"></div>
                                            <div className="green-shape green-shape--sender"></div>
                                        </div>
                                    </div>
                                </>
                            )
                        } else if (value.userId === props.selectUser) {
                            return (
                                // <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', }}>
                                //     <span>{props.selectUser} : {value.message}</span>
                                // </div>
                                <div className='chat-container--receiver'>
                                    <div className="chat-box green-box--receiver ">
                                        <span className="chat-text">{value.oppositeUserId}: {value.message}</span>
                                        <div className="white-shape white-shape--receiver"></div>
                                        <div className="green-shape green-shape--receiver"></div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="chat-input" style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <input onKeyPress={(e) => e.key === "Enter" ? send(e) : null} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='input-message' />
                    <Button onClick={send} shape="circle" icon={<SendOutlined style={{ fontSize: '1.25rem' }} />} style={{ border: 'none', shadow: 'none' }} htmlType='submit' ></Button>
                </div>
            </Col>
        </Row >
    )
}

export default ChatMessage
