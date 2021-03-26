import React from "react";
import { TextField } from "@material-ui/core";

const DashBoardTop = () => {
  return (
    <div className="dashboard-top">
      <div className="dashboard-up">
        <div className="date">
          <label>Date From:</label>
          <TextField type="date" defaultValue="2017-05-24" />
        </div>
        <div className="date">
          <label>To:</label>
          <TextField type="date" defaultValue="2017-05-24" />
        </div>
        <button className="btn">Get Data</button>
      </div>
      <div className="dashboard-down">
        <p>Today</p>
        <p>This Week</p>
        <p>This Month</p>
        <p>Last 3 Months</p>
        <p>Last 6 Months</p>
        <p>Last Year</p>
      </div>
    </div>
  );
};

export default DashBoardTop;
