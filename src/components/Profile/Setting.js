import React, { useEffect, useState } from 'react';
import { Layout, Menu, Switch, Slider, Select, Modal, Button, Input } from 'antd';
import './Setting.css';
import CardProfile from './CardProfile';
import CardLocation from './CardLocation';
import axios from '../../config/axios';

const { Content, Footer } = Layout;
const { Option } = Select;

export default function Profile(props) {
  let data = props.profile;
  const onChangeMaxDistance = props.fcMaxDistance;
  const onChangeAge = props.fcAge;
  const onChangeShowMe = props.fcShow;
  const onChangeTarget = props.fcTarget;
  const onChangeEmail = props.fcEmail;
  const onChangePhone = props.fcPhone

  let editEmail = "";
  let editPhone = "";

  const [visEditEmail, setVisEditEmail] = useState(false)
  const [visEditPhone, setVisEditPhone] = useState(false)

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  let key = "AIzaSyCitLWlUqIyE-ImhLvVErONNige0x9w2Xw";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
    console.log(latitude + "," + longitude)

  }, []);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(`${proxyurl}https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`)
      .then(res => {
        setCurrentLocation(res.data.results[2].formatted_address)
      })
      .catch(err => {
        console.log(err)
      })
  }, [latitude, longitude]);

  const [showCardLocation, setShowCardLocation] = useState(false)

  const onClickShowCardLocation = () => {
    setShowCardLocation(showCardLocation => !showCardLocation);
  }

  // --------------- Edit email --------------
  const editEmailOk = value => {
    onChangeEmail(value);
    toggleEmail();
  };
  const toggleEmail = () => {
    setVisEditEmail(visEditEmail => !visEditEmail)
  }
  // --------------- Edit email --------------
  // --------------- Edit phone --------------
  const editPhoneOk = value => {
    onChangePhone(value);
    togglePhone();
  };
  const togglePhone = () => {
    setVisEditPhone(visEditPhone => !visEditPhone)
  }
  // --------------- Edit phone --------------

  return (
    <div style={{ width: "100vw" }}>
      <Layout>
        <aside className="aside_setting">
          <div className="matches">
            <div className="matches-header" style={{ zIndex: "2", position: "fixed", width: "380px", height: "75px" }}>
              <a className="matches-header__profile" href="#">
                <img src="./images/profile2.jpg" alt="" style={{ objectFit: "cover" }} />
                <span>My Profile</span>
              </a>
            </div>
          </div>
          <h2 style={{ marginTop: "80px" }}>Account Setting</h2>
          <Menu theme="light" mode="inline" selectedKeys="false">
            {/* <Menu.Item key="1" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              Restore Process
            </Menu.Item> */}
            <Menu.Item key="2" onClick={toggleEmail} style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Email</div>
                <div>
                  {data.email}
                </div>
              </div>

            </Menu.Item>
            <Menu.Item key="3" style={{}}>
              <div onClick={togglePhone} style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Phone Number</div>
                <div>{data.mobile_number ? data.mobile_number : '-'}</div>
              </div>
            </Menu.Item>
            {/* <Menu.Item key="4" style={{}}>
              Promo Code
            </Menu.Item> */}
          </Menu>
          <p>Verified Phone Number and Email help secure your account.</p>
          <Menu theme="light" mode="inline" selectedKeys="false">
            <Menu.Item key="5" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }} onClick={onClickShowCardLocation}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Location</div>
                <div style={{width:"200px"}}>{currentLocation}</div>
              </div>
            </Menu.Item>
            <Menu.Item key="6" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)", height: "80px" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Maximum Distance</div>
                <div>{data.max_distance}</div>
              </div>
              <Slider value={data.max_distance} onChange={onChangeMaxDistance} />
            </Menu.Item>
            <Menu.Item key="7" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Looking For</div>
                <Select
                  value={data.target}
                  style={{ width: 120 }}
                  bordered={false}
                  onChange={onChangeTarget}>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="everyone">Everyone</Option>
                </Select>
              </div>
            </Menu.Item>
            <Menu.Item key="8" style={{ height: "80px" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Age range</div>
                <div>{`${data.target_minAge} - ${data.target_maxAge}`}</div>
              </div>
              <Slider range value={[data.target_minAge, data.target_maxAge]} onChange={(e) => onChangeAge(e)} />
            </Menu.Item>
            {/* <Menu.Item key="9" style={{}}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Global</div>
                <div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Menu.Item> */}
          </Menu>
          <p>Going global will allow you to see people from around the world after you’ve run out of profiles nearby.</p>
          <Menu theme="light" mode="inline" selectedKeys="false">
            <Menu.Item key="10" style={{}}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Show me on Tinder</div>
                <div>
                  <Switch defaultChecked onChange={onChangeShowMe} />
                </div>
              </div>
            </Menu.Item>
          </Menu>
          <p>While turned off, you will not be shown in the card stack. You can still see and chat with your matches.</p>
          <Menu theme="light" mode="inline" selectedKeys="false">
            <Menu.Item key="11" style={{}}>
              Log Out
            </Menu.Item>
          </Menu>
        </aside>
        {showCardLocation ? <CardLocation data={currentLocation} fcShowCardLocation={onClickShowCardLocation} /> : <CardProfile data={data} />};

      </Layout>

      <Modal
        title="Enter Your Email"
        visible={visEditEmail}
        onOk={() => editEmailOk(editEmail)}
        onCancel={toggleEmail}
      >
        <Input defaultValue={data.email} onChange={e => { editEmail = e.target.value }}></Input>
      </Modal>
      <Modal
        title="Enter Your Phone Number"
        visible={visEditPhone}
        onOk={() => editPhoneOk(editPhone)}
        onCancel={togglePhone}
      >
        <Input defaultValue={data.mobile_number} onChange={e => { editPhone = e.target.value }}></Input>
      </Modal>
    </div>
  );
}
