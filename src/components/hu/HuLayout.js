import React from "react";
import HuNavBar from "./HuNavbar";
import "../../styles/global.scss";

export default function HuLayout({ children }) {
  return (
    <div>
      <HuNavBar />
      <div className="content">{children}</div>
    </div>
  );
}
