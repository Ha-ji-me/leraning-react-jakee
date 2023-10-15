import React, {useState, useEffect} from "react";
import './Sidebar.css';
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";

function Sidebar() {
  return(
    <div className="sidebar">
      <SidebarIcon />
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          return(
            <li key={key}
                id={window.location.pathname == value.link ? "active" : ""}
                className="row" onClick={() => { window.location.pathname = value.link; }}>
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar;