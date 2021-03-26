import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon, InlineIcon } from "@iconify/react";
import calculatorIcon from "@iconify-icons/mdi/calculator";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-up">
        <h4>Thulo Billing Software</h4>
        <div className="icons">
          <RemoveCircleIcon />
          <Icon icon={calculatorIcon} />
          <CloseIcon />
        </div>
      </div>
      <div className="topbar-down">
        <p>Current User:Admin</p>
        <p>Decline</p>
      </div>
    </div>
  );
};

export default Topbar;
