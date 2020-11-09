import React, { useState, useEffect } from 'react';
import Setting from '../components/Profile/Setting';
import axios from '../config/axios';
import LocalStorageService from '../services/localStorage'

function Profile() {
  const [profile, setProfile] = useState();
  // const [email, setEmail] = useState();
  // const [birthDay, setBirthDay] = useState();
  // const [gender, setGender] = useState();
  // const [target, setTarget] = useState();
  // const [lat, setLat] = useState();
  // const [long, setLong] = useState();
  // const [motto, setMotto] = useState();
  // const [minAge, setMinAge] = useState();
  // const [maxAge, setMaxAge] = useState();
  // const [mobileNumber, setMobileNumber] = useState();
  useEffect(() => {
    axios.get("/profile")
      .then(res => {
        setProfile(res.data.profile);
      });
  }, []);
  console.log({ profile });
  return (
    <div style={{ display: 'flex' }}>
      <Setting props={profile} />
    </div>
  );
}

export default Profile;
