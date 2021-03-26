import React from "react";
import navList from "./navList";
import Topbar from "./Topbar";
import { Avatar } from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="side-head">
          <Avatar />
          <MenuOutlinedIcon className="menu-icon" />
        </div>
        <ul className="navbar">
          {navList.map((value, index) => {
            return (
              <li className="nav-list" key={index}>
                <a href={"#"}>
                  {value.icon}
                  {value.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="body">
        <Topbar />
      </div>
    </>
  );
};

export default Sidebar;
