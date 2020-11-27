import React, { useEffect, useState } from 'react';
import './matches.css';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import ChatMessage from '../ChatMessage/ChatMessage';
import { Button, Col, Row } from 'antd';
import LocalStorageService from '../../services/localStorage'
import { BASE_BACKEND_URL } from '../../config/constants'
import io from 'socket.io-client';



const data = [
  {
    name: 'ดิว',
    detailLink: 'https://people.mthai.com/starthai/9572.html',
    birthDay: 720464400,
    images: [
      'https://img-ha.mthcdn.com/D0eId6plUzvgJUTVTjYBxDxLyAs=/200x200/smart/people.mthai.com/app/uploads/2017/01/131.jpg',
      'https://people.mthai.com/app/uploads/2017/01/14-300x300.jpg',
      'https://people.mthai.com/app/uploads/2017/01/2-300x237.jpg',
      'https://people.mthai.com/app/uploads/2017/01/32-300x199.jpg',
      'https://people.mthai.com/app/uploads/2017/01/41-287x300.jpg',
    ],
  },
  {
    name: 'ซัน',
    detailLink: 'https://people.mthai.com/starthai/9479.html',
    birthDay: 608403600,
    images: [
      'https://img-ha.mthcdn.com/CpASTveRIYyuenThToNJ4ELm1b0=/200x200/smart/people.mthai.com/app/uploads/2017/01/27.jpg',
      'https://people.mthai.com/app/uploads/2017/01/7-300x294.jpg',
      'https://people.mthai.com/app/uploads/2017/01/6-300x296.jpg',
      'https://people.mthai.com/app/uploads/2017/01/3-300x296.jpg',
      'https://people.mthai.com/app/uploads/2017/01/1-300x300.jpg',
    ],
  },
  {
    name: 'เก่ง',
    detailLink: 'https://people.mthai.com/starthai/9110.html',
    birthDay: 334602000,
    images: [
      'https://img-ha.mthcdn.com/5ZwvvcxQdoH-2gqOa5gKgjuJu98=/200x200/smart/people.mthai.com/app/uploads/2016/12/114.jpg',
      'https://people.mthai.com/app/uploads/2016/12/65-225x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/22-300x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/45-300x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/55-230x300.jpg',
    ],
  },
  {
    name: 'แอน',
    detailLink: 'https://people.mthai.com/starthai/9095.html',
    birthDay: -186044400,
    images: [
      'https://img-ha.mthcdn.com/c-lIRThyDlpsouZRFjxpBk3VLL0=/200x200/smart/people.mthai.com/app/uploads/2016/12/44.jpg',
      'https://people.mthai.com/app/uploads/2016/12/54-264x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/ann2-225x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/113-200x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/35-233x300.jpg',
    ],
  },
  {
    name: 'พิม',
    detailLink: 'https://people.mthai.com/starthai/8968.html',
    birthDay: 718650000,
    images: [
      'https://img-ha.mthcdn.com/envGirZClwu-Du0wQXu0Xud9ELQ=/200x200/smart/people.mthai.com/app/uploads/2016/11/138.jpg',
      'https://people.mthai.com/app/uploads/2016/12/9-265x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/8-300x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/2-254x300.jpg',
      'https://people.mthai.com/app/uploads/2016/12/3-238x300.jpg',
    ],
  },
  {
    name: 'บูม',
    detailLink: 'https://people.mthai.com/starthai/8951.html',
    birthDay: 618771600,
    images: [
      'https://img-ha.mthcdn.com/8OzrpCjlCPkJ7OPe0Yo1CZSd3ZE=/200x200/smart/people.mthai.com/app/uploads/2016/11/145.jpg',
      'https://people.mthai.com/app/uploads/2016/11/313-300x214.jpg',
      'https://people.mthai.com/app/uploads/2016/11/811-236x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/136-240x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/415-300x300.jpg',
    ],
  },
  {
    name: 'เจเจ',
    detailLink: 'https://people.mthai.com/starthai/8852.html',
    birthDay: 840042000,
    images: [
      'https://img-ha.mthcdn.com/VYyrufqaAq_RiraqrRbEGACQAlU=/200x200/smart/people.mthai.com/app/uploads/2016/11/89.jpg',
      'https://people.mthai.com/app/uploads/2016/11/154-239x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/135-295x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/79-240x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/144-237x300.jpg',
    ],
  },
  {
    name: 'กิ๊ฟ',
    detailLink: 'https://people.mthai.com/starthai/8916.html',
    birthDay: 508784400,
    images: [
      'https://img-ha.mthcdn.com/7YGfPJ6KcltZBC0SiBp-Vo1ku4g=/200x200/smart/people.mthai.com/app/uploads/2016/11/162.jpg',
      'https://people.mthai.com/app/uploads/2016/11/172-260x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/109-300x203.jpg',
      'https://people.mthai.com/app/uploads/2016/11/130-238x300.jpg',
      'https://people.mthai.com/app/uploads/2016/11/213-269x300.jpg',
    ],
  },
];

export default function Matches(props) {
  const [matchProfile, setMatchProfile] = useState([])
  const [content, setContent] = useState('matches')
  const [profileUrl, setProfileUrl] = useState(null);
  const [name, setName] = useState(null);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState([]);
  const decoded = LocalStorageService.getUserProfile();
  const history = useHistory()

  useEffect(() => {
    const newSocket = io.connect(BASE_BACKEND_URL, {
      query: {
        token: LocalStorageService.getToken(),
      },
    })
    setSocket(newSocket)
  }, [])

  const selectProfile = (profileId) => {
    console.log('selectProfileId', profileId)
    setContent('message')
    props.setSelectUser(profileId)
  }



  useEffect(() => {
    axios.get(`/users/${decoded?.id}`)
      .then(res => {
        setProfileUrl(res.data.Photos[0].imageUrl);
        setName(res.data.name)
      }).catch(err => {
        console.log(err)
      })
  })

  const displayProfiles = () => {
    return matchProfile.map((profile) => (
      <div className="matches-profile-item" key={profile.id} onClick={() => selectProfile(profile.id)} style={{ cursor: 'pointer' }} >
        <img src={profile.Photos[0].imageUrl} ></img>
        <span>{profile.name}</span>
      </div>
    ));
  };

  const getMatchedProfile = () => {
    axios.get('/play/matches')
      .then(res => {
        console.log('res', res.data)
        setMatchProfile(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMatchedProfile();
  }, [])

  const changeToMessage = () => {
    setContent('message')
  }


  const changeToMatch = () => {
    setContent('matches');
    props.setSelectUser(null)
  }



  return (
    <Col xs={10} sm={9} md={8} lg={6} xl={6} className="matches" >
      <Row className="matches-header">
        <Link to="/profile" className="matches-header__profile" href="#">
          <img src={profileUrl} alt="" />
          <span>My Profile</span>
        </Link>
        <button style={{ outline: 'none' }} onClick={() => { LocalStorageService.clearToken(); history.push('/'); window.location.reload() }} >
          <i className="fas fa-shopping-bag"></i>
        </button>
      </Row>
      <Row className="matches-tab" >
        <button className='content-btn--matches' onClick={changeToMatch}  >Matches</button>
        {content === 'message' ? <button className='content-btn--message' onClick={changeToMessage} >Messages</button> : null}
      </Row>
      {content === 'matches' ?
        <Row data-aos='slide-up' className="matches-profiles">{displayProfiles()}</Row>
        :
        <ChatMessage socket={socket} selectUser={props.selectUser} message={message} setMessage={setMessage} />
      }
    </Col>
  );
}
