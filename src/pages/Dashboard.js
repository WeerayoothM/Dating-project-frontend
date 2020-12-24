import { Layout, notification } from "antd";
import React, { useState, useEffect } from "react";
import Matches from "../components/Matches/Matches";
import Playground from "../components/Playground/Playground";
import CardProfile from "../components/Profile/CardProfile";
import axios from "../config/axios";

function Dashboard(props) {
  const [selectUser, setSelectUser] = useState(null);
  const [data, setData] = useState(null);
  const [matchProfile, setMatchProfile] = useState([]);


  const getMatchedProfile = () => {
    axios
      .get("/play/matches")
      .then((res) => {
        console.log("res", res.data);
        setMatchProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMatchedProfile()
  }, [])

  useEffect(() => {
    if (selectUser) {
      axios
        .get(`/users/${selectUser}`)
        .then((res) => {
          console.log(res.data);
          setData((data) => res.data);
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            description: "Error",
          });
        });
    }
  }, [selectUser]);

  return (
    <Layout style={{ background: "white", height: "100vh" }}>
      <aside>
        <Matches matchProfile={matchProfile} selectUser={selectUser} setSelectUser={setSelectUser} />
      </aside>
      {selectUser ? (
        <CardProfile data={data} isShowEditBtn={false} />
      ) : (
          <Playground getMatchedProfile={getMatchedProfile} selectUser={selectUser} setSelectUser={setSelectUser} />
        )}
    </Layout>
  );
}

export default Dashboard;
