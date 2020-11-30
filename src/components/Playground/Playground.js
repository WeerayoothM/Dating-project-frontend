import React, { useState, useEffect, useRef } from "react";
import "./playground.css";
import axios from "../../config/axios";
import { Col, Row } from "antd";

export default function Playground() {
  const profileEl = useRef(null);
  const profileImageEl = useRef(null);


  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [id, setId] = useState(null);
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [targetLong, setTargetLong] = useState(null);
  const [targetLat, setTargetLat] = useState(null);

  useEffect(() => {
    getNextProfile();
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
    });
  }, []);

  const getNextPhoto = () => {
    profileImageEl.current.classList.add('slide-left');
    setTimeout(() => {
      profileImageEl.current.classList.remove("slide-left");
      profileImageEl.current.classList.add("show-next-image");
      setPhotoIndex((photoIndex + 1) % photos.length);
    }, 500);
  };

  const handleLike = async () => {
    try {
      const res = await axios.post(`/play/like/${id}`);
      if (res.data.status && res.data.status === "match") {
        profileEl.current.classList.add("tada");
        return setTimeout(() => {
          getNextProfile();
        }, 2000);
      }
      profileEl.current.classList.add("rotate-right");

      setTimeout(() => {
        getNextProfile();
      }, 900);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlike = () => {
    profileEl.current.classList.add("rotate-left");
    setTimeout(() => {
      getNextProfile();
    }, 900);
  };

  const getNextProfile = () => {
    axios
      .get("/play")
      .then((res) => {
        const user = res.data.randUser;
        console.log("user", user);
        setPhotoIndex(0);
        setId(user.id);
        setName(user.name);
        setBirthDay(user.birthDay);
        setPhotos(user.Photos);
        setTargetLat(Number(user.lat));
        setTargetLong(Number(user.long));
        profileEl.current.classList.remove("rotate-left", "tada");
        profileEl.current.classList.remove("rotate-right", "tada");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  const distance = getDistance(lat, long, targetLat, targetLong).toFixed(1);
  const image_url =
    photos[photoIndex] &&
    (photos[photoIndex].imageUrl.includes("http")
      ? photos[photoIndex].imageUrl
      : `http://localhost:5555/${photos[0].imageUrl}`);
  return (

    <Col xs={14} sm={15} md={16} lg={17} xl={18} className="playground" style={{ backgroundColor: 'hsl(0,0%,97%)', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div justify='center' ref={profileEl} className="playground-profile">
        <img className="profile-image" ref={profileImageEl} src={image_url} alt="" />
        <span>
          {name} {distance}km.
        </span>
      </div>
      <div className="playground-control">
        <div>
          <i className="fas fa-undo"></i>
        </div>
        <div onClick={handleUnlike}>
          <i className="fas fa-times"></i>
        </div>
        <div onClick={getNextPhoto}>
          <i className="fas fa-images"></i>
        </div>
        <div onClick={handleLike}>
          <i className="fas fa-heart"></i>
        </div>
        <div>
          <i className="fas fa-bolt"></i>
        </div>
      </div>
    </Col>
  );
}
