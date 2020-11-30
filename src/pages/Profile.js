import { notification } from 'antd';
import React, { useState, useEffect } from 'react';
import Setting from '../components/Profile/Setting';
import axios from '../config/axios';

function Profile() {
  const [profile, setProfile] = useState([]);
  console.log(profile)

  const onChangeMaxDistance = (value) => {
    setProfile({
      ...profile,
      max_distance: value
    });
    axios.put('/profile', { ...profile, max_distance: value })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onChangeAge = (value) => {
    setProfile({
      ...profile,
      target_minAge: value[0],
      target_maxAge: value[1]
    });
    axios.put('/profile', { ...profile, target_minAge: value[0], target_maxAge: value[1] })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onChangeShow = (value) => {
    setProfile({
      ...profile,
      showMe: value
    });
    axios.put('/profile', { ...profile, showMe: value })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onChangeTargetGender = (value) => {
    setProfile({
      ...profile,
      target: value
    });
    axios.put('/profile', { ...profile, target: value })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onChangeEmail = (value) => {
    setProfile({
      ...profile,
      email: value
    });
    axios.put('/profile', { ...profile, email: value })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  const onChangePhone = (value) => {
    setProfile({
      ...profile,
      mobile_number: value
    });
    axios.put('/profile', { ...profile, mobile_number: value })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get("/profile")
      .then(res => {
        setProfile(data => res.data.profile);
      })
      .catch(err => {
        console.log(err)
        notification.error({
          description: "Error"
        })
      })
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Setting
        profile={profile}
        fcMaxDistance={onChangeMaxDistance}
        fcAge={onChangeAge}
        fcShow={onChangeShow}
        fcTarget={onChangeTargetGender}
        fcEmail={onChangeEmail}
        fcPhone={onChangePhone}
      />
    </div>
  );
}

export default Profile;
