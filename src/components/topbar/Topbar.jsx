import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mRpgqynhB3h5J2zocSvXgs9mDfUFVRyasgkH0H2CvEZ707m32NizgVAFtQ2iZATt6hE&usqp=CAU" />
        </div>
        <div className="topRight">
         
          
          <img src="https://www.nicepng.com/png/detail/518-5189122_logout-transparent-logout-button-icon.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
