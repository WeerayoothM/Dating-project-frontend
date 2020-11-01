import React from "react";
import "../../css/admin.css";
function admin() {
  return (
    <div class="body">
      <div class="sidebar">
        <div class="admin-logo">
          <img src="./images/admin.jpg" />
        </div>
        <i class="fas fa-users"></i>
        <i class="fas fa-user"></i>
        <i class="fas fa-user-minus"></i>
      </div>
      <div class="admin-content">
        <input placeholder="search user" />
        <button>click to search</button>
        <div class="users">
          <ul>
              this is when you click users icon
            <li>
              <span style={{paddingRight:"2px"}}>name</span>
              <span style={{paddingRight:"2px"}}>email</span>
              <span style={{paddingRight:"2px"}}>password</span>
              <span style={{paddingRight:"2px"}}>birthday</span>
              <span style={{paddingRight:"2px"}}>gender</span>
              <span style={{paddingRight:"2px"}}>target</span>
              <span style={{paddingRight:"2px"}}>lat</span>
              <span style={{paddingRight:"2px"}}>long</span>
              <span style={{paddingRight:"2px"}}>motto</span>
            </li>
            <li>
              <span style={{paddingRight:"2px"}}>name</span>
              <span style={{paddingRight:"2px"}}>email</span>
              <span style={{paddingRight:"2px"}}>password</span>
              <span style={{paddingRight:"2px"}}>birthday</span>
              <span style={{paddingRight:"2px"}}>gender</span>
              <span style={{paddingRight:"2px"}}>target</span>
              <span style={{paddingRight:"2px"}}>lat</span>
              <span style={{paddingRight:"2px"}}>long</span>
              <span style={{paddingRight:"2px"}}>motto</span>
            </li>
            will pop up
          </ul>
        </div>
      </div>
    </div>
  );
}
export default admin;
