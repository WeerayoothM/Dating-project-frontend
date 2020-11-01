import React from 'react';
import '../../css/matches.css';

export default function Matches() {
  return (
    <div className="matches">
      <div className="matches-header">
        <a className="matches-header__profile" href="#">
          <img src="./images/profile.jpg" alt="" />
          <span>My Profile</span>
        </a>
        <button>
          <i class="fas fa-shopping-bag"></i>
        </button>
      </div>
    </div>
  );
}
