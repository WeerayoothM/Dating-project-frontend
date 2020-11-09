import React, { useEffect, useState } from 'react';
import { Layout, Menu, Switch, Slider } from 'antd';
import './Setting.css';


const { Content, Footer } = Layout;

export default function Profile(props) {
  const data = {
    name : props.props.name,
    email : props.props.email,
    phone : props.props.mobile_number,

  }
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div style={{ width: "100vw" }}>
      <Layout>
        <aside style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          minWidth: '380px',
          maxWidth: '380px',
          width: "380px",
          border: "1px solid hsl(0, 0%, 90%)"
        }}>
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
            <Menu.Item key="1" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              Restore Process
            </Menu.Item>
            <Menu.Item key="2" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Email</div>
                <div>

                </div>
              </div>
            </Menu.Item>
            <Menu.Item key="3" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Phone Number</div>
                <div>66906251514</div>
              </div>
            </Menu.Item>
            <Menu.Item key="4" style={{}}>
              Promo Code
            </Menu.Item>
          </Menu>
          <p>Verified Phone Number and Email help secure your account.</p>
          <Menu theme="light" mode="inline" selectedKeys="false">
            <Menu.Item key="5" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Location</div>
                <div>Bangwa Thailand</div>
              </div>
            </Menu.Item>
            <Menu.Item key="6" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)", height: "80px" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Maximum Distance</div>
                <div>80</div>
              </div>
              <Slider defaultValue={30} />
            </Menu.Item>
            <Menu.Item key="7" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Looking For</div>
                <div></div>
              </div>
            </Menu.Item>
            <Menu.Item key="8" style={{ borderBottom: "1px solid hsl(0, 0%, 90%)", height: "80px" }}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Age range</div>
                {/* <div>{`${profile.profile.target_minAge}-${profile.profile.target_maxAge}`}</div> */}
              </div>
              <Slider range defaultValue={[20, 50]} />
            </Menu.Item>
            <Menu.Item key="9" style={{}}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Global</div>
                <div>
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
            </Menu.Item>
          </Menu>
          <p>Going global will allow you to see people from around the world after you’ve run out of profiles nearby.</p>
          <Menu theme="light" mode="inline" selectedKeys="false">
            <Menu.Item key="10" style={{}}>
              <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                <div>Show me on Tinder</div>
                <div>
                  <Switch defaultChecked onChange={onChange} />
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
        <main style={{ height: "100vh" }}>
          <div style={{ width: "400px", height: "620px", marginLeft: "50%", marginTop: "1%", boxShadow: "0 2px 10px 0 rgba(136,136,136,0.77)", borderRadius: "20px" }}>
            <img src="./images/profile2.jpg" alt="" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px 20px 0px 0px" }} />
            <div style={{}}>
              <h1>Pongpol 25</h1>
              <button>Edit</button>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
