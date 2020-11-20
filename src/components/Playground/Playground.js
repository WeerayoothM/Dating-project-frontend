import React, { useState, useEffect, useRef } from 'react';
import './playground.css';
import axios from '../../config/axios';

export default function Playground() {
  const profileEl = useRef(null);
  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [id, setId] = useState(null);

  useEffect(() => {
    getNextProfile();
  }, []);

  const getNextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % photos.length);
  };

  const handleLike = async () => {
    try {
      const res = await axios.post(`/play/like/${id}`);
      if (res.data.status && res.data.status === 'match') {
        profileEl.current.classList.add('tada');
        return setTimeout(() => {
          getNextProfile();
        }, 2000);
      }
      profileEl.current.classList.add('rotate-right');

      setTimeout(() => {
        getNextProfile();
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlike = () => {
    profileEl.current.classList.add('rotate-left');
    setTimeout(() => {
      getNextProfile();
    }, 1000);
  };

  const getNextProfile = () => {
    axios
      .get('/play')
      .then((res) => {
        const user = res.data.randUser;
        console.log('user', user);
        setPhotoIndex(0);
        setId(user.id);
        setName(user.name);
        setBirthDay(user.birthDay);
        setPhotos(user.Photos);
        profileEl.current.classList.remove('rotate-left', 'tada');
        profileEl.current.classList.remove('rotate-right', 'tada');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const image_url =
    photos[photoIndex] &&
    (photos[photoIndex].imageUrl.includes('http')
      ? photos[photoIndex].imageUrl
      : `http://localhost:5555/${photos[0].imageUrl}`);
  return (
    <div className="playground">
      <div ref={profileEl} className="playground-profile">
        <img src={image_url} alt="" />
        <span>{name}</span>
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
    </div>
  );
}
