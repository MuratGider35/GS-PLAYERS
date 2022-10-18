import React from "react";
import "./Header.css";
import { useState } from "react";
const Header = ({ firstInd, lastInd, currentUsers }) => {
  return (
    <div className="header">
      <h1>GS TEAM LİST</h1>
      <p>
        (Players {firstInd < 0 ? null : firstInd + 1} to {currentUsers.length + firstInd})
      </p>
    </div>
  );
};

export default Header;
