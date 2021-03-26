import React from "react";
import dashBoardList from "./dashBoardList";
import DashBoardElement from "./DashBoardElement";
import DashBoardTop from "./DashBoardTop";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <DashBoardTop />
        <div className="dashboard-menu">
          {dashBoardList.map((value, index) => {
            return <DashBoardElement key={index} title={value.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
