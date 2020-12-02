import React, { useState } from 'react';
import Matches from '../components/Matches/Matches';
import Playground from '../components/Playground/Playground';
import CardProfile from '../components/Profile/CardProfile';

function Dashboard(props) {
  const [selectUser, setSelectUser] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <Matches selectUser={selectUser} setSelectUser={setSelectUser} />
      {selectUser ?
        <Playground selectUser={selectUser} setSelectUser={setSelectUser} />
        :
        <CardProfile selectUser={selectUser} />
      }
    </div>
  );
}

export default Dashboard;
