import { Button, Col, notification, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import './ChatMessage.css'
import { SendOutlined } from "@ant-design/icons";
import LocalStorageService from '../../services/localStorage'
import { useHistory } from 'react-router-dom';


const token = LocalStorageService.getToken();


function ChatMessage(props) {
    const [message, setMessage] = useState([]);
    const [roomId, setRoomId] = useState(null);
    const socket = props.socket;
    const [inputValue, setInputValue] = useState("");
    const history = useHistory()
    const messageRef = useRef(null)

    const user = LocalStorageService.getUserProfile();

    useEffect(() => {
        console.log('in chatmessage')

        socket.on('new_message', ({ newMessage, chatRoomId }) => {
            const oldmessage = getMessages()
            console.log('message', oldmessage)
            // const temp = [...oldmessage];
            // if (roomId === data.roomId && (props.selectUser === data.userId || user.id === data.userId)) {
            //     temp.push({ message: data.message, userId: data.userId, oppositeUserId: props.selectUser })
            // }
            const temp = newMessage.reduce((acc, item) => {
                acc.push({ message: item.message, userId: item.User.id })
                return acc
            }, [])
            setMessage(temp)
            messageRef.current && messageRef.current.scrollTo(0, 10000000)
        })

        socket.on('room-data', ({ roomData, chatRoomId }) => {
            console.log('in room-data', roomData)

            setRoomId(chatRoomId)
            const temp = roomData.reduce((acc, item) => {
                acc.push({ message: item.message, userId: item.User.id })
                return acc
            }, [])
            console.log('temp2', temp)
            setMessage(temp)
            messageRef.current.scrollTo(0, 100000000)
            // window.scrollTo(0, document.body.scrollHeight)

        })
        socket.on('token-expired', (data) => {
            notification.error({
                description: 'token-expired'
            })
            LocalStorageService.clearToken()
            history.push('/')
            socket.close()
        })


        return () => {
            console.log('unmount')
            setMessage([])
        }
    }, [])

    const getMessages = () => {
        console.log('getMessages', message)
        return message
    }

    const send = (e) => {
        e.preventDefault()
        // console.log(user.id)
        console.log('sendmessage', message)
        socket.emit('sent_message', { message: inputValue, userId: user.id, oppositeUserId: props.selectUser })
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
                <div ref={messageRef} className="chat-log">
                    <span>{props.selectUser}</span>
                    {message.map((value) => {
                        if (value.userId === user.id) {
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

                                <div className='chat-container--receiver'>
                                    <div className="chat-box green-box--receiver ">
                                        <span className="chat-text">{value.userId}: {value.message}</span>
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
