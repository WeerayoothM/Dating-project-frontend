import React from 'react';
import Matches from '../components/Matches/Matches';
import Playground from '../components/Playground/Playground';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Matches />
      <Playground />
    </div>
  );
}

export default Dashboard;
