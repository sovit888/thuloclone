import React from "react";
import { Paper } from "@material-ui/core";
import logo from "../../assets/logo.png";

const DashBoardElement = ({ title }) => {
  return (
    <div className="dashboard-item">
      <Paper elevation={1}>
        <div className="dashboard-head">
          <p>{title}</p>
          <img src={logo} alt="image of merchanys" />
        </div>
        <p className="price">Rs 00000</p>
      </Paper>
    </div>
  );
};

export default DashBoardElement;
