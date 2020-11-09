import React, { useState, useEffect } from 'react';
import './playground.css';
import axios from '../../config/axios';

export default function Playground() {
  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getNextProfile();
  }, []);

  const handleLike = () => {
    axios
      .post('/api', { status: 'like' })
      .then((res) => { })
      .catch((err) => {
        console.error(err);
      });
  };

  const getNextProfile = () => {
    axios
      .get('/play')
      .then((res) => {
        const user = res.data.randUser;
        console.log('user', user);
        setName(user.name);
        setBirthDay(user.birthDay);
        setPhotos(user.Photos);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const image_url = photos[0] && (photos[0].imageUrl.includes('http') ? photos[0].imageUrl : `http://localhost:5555/${photos[0].imageUrl}`);
  return (
    <div className="playground">
      <div className="playground-profile">
<<<<<<< HEAD
        <img src={photos[0] && photos[0].imageUrl} alt="" />
=======
        <img src={image_url} alt="" />
>>>>>>> 92869ae5369da6e228c65a196b8139802493a25a
        <span>{name}</span>
      </div>
      <div className="playground-control">
        <div>
          <i class="fas fa-undo"></i>
        </div>
        <div onClick={getNextProfile}>
          <i class="fas fa-times"></i>
        </div>
        <div>
          <i class="fas fa-star"></i>
        </div>
        <div onClick={handleLike}>
          <i class="fas fa-heart"></i>
        </div>
        <div>
          <i class="fas fa-bolt"></i>
        </div>
      </div>
    </div>
  );
}
