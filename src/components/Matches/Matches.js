import React, { useEffect, useState } from "react";
import "./matches.css";
import { Link, useHistory } from "react-router-dom";
import axios from "../../config/axios";
import ChatMessage from "../ChatMessage/ChatMessage";
import { Col, Row } from "antd";
import LocalStorageService from "../../services/localStorage";
import { BASE_BACKEND_URL } from "../../config/constants";
import io from "socket.io-client";

export default function Matches(props) {
  const [content, setContent] = useState("matches");
  const [profileUrl, setProfileUrl] = useState(null);
  const [name, setName] = useState(null);
  const decoded = LocalStorageService.getUserProfile();
  const history = useHistory();

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io.connect(BASE_BACKEND_URL, {
      query: {
        token: LocalStorageService.getToken(),
      },
    });
    setSocket(newSocket);
  }, []);

  const selectProfile = (profileId) => {
    socket.emit("join", { oppositeUserId: profileId, userId: decoded?.id });
    console.log("selectProfileId", profileId);
    setContent("message");
    props.setSelectUser(profileId);
  };

  useEffect(() => {
    axios
      .get(`/users/${decoded?.id}`)
      .then((res) => {
        console.log(typeof res.data.Photos);
        setProfileUrl(res.data.Photos[0].imageUrl);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayProfiles = () => {
    return props.matchProfile.map((profile) => (
      <div
        className="matches-profile-item"
        key={profile.id}
        onClick={() => selectProfile(profile.id)}
        style={{ cursor: "pointer" }}
      >
        <img src={profile.Photos[0].imageUrl}></img>
        <span>{profile.name}</span>
      </div>
    ));
  };



  const changeToMessage = () => {
    setContent("message");
  };

  const changeToMatch = () => {
    setContent("matches");
    props.setSelectUser(null);
  };

  return (
    <Col
      xs={10}
      sm={9}
      md={8}
      lg={7}
      xl={6}
      className="matches"
      style={{ position: "absolute" }}
    >
      <Row className="matches-header">
        <Link to="/profile" className="matches-header__profile" href="#">
          <img src={profileUrl} alt="" />
          <span>My Profile</span>
        </Link>
      </Row>
      <Row className="matches-tab">
        <button className="content-btn--matches" onClick={changeToMatch}>
          Matches
        </button>
        {content === "message" ? (
          <button className="content-btn--message" onClick={changeToMessage}>
            Messages
          </button>
        ) : null}
      </Row>
      {content === "matches" ? (
        <Row data-aos="slide-up" className="matches-profiles">
          {displayProfiles()}
        </Row>
      ) : (
          <ChatMessage socket={socket} selectUser={props.selectUser} />
        )}
    </Col>
  );
}
