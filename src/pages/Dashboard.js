import { notification } from "antd";
import React, { useState, useEffect } from "react";
import Matches from "../components/Matches/Matches";
import Playground from "../components/Playground/Playground";
import CardProfile from "../components/Profile/CardProfile";
import axios from "../config/axios";

function Dashboard(props) {
  const [selectUser, setSelectUser] = useState(null);
  const [data, setData] = useState(null);

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
    <div style={{ display: "flex" }}>
      <Matches selectUser={selectUser} setSelectUser={setSelectUser} />
      {selectUser ? (
        <CardProfile data={data} />
      ) : (
        <Playground selectUser={selectUser} setSelectUser={setSelectUser} />
      )}
    </div>
  );
}

export default Dashboard;
