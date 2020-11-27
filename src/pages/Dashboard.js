import React, { useState } from 'react';
import Matches from '../components/Matches/Matches';
import Playground from '../components/Playground/Playground';

function Dashboard(props) {
  const [selectUser, setSelectUser] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <Matches selectUser={selectUser} setSelectUser={setSelectUser} />
      <Playground selectUser={selectUser} setSelectUser={setSelectUser} />
    </div>
  );
}

export default Dashboard;
