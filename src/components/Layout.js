import React, { useState } from "react";
import NavBar from "../components/Navbar";
import "../styles/global.scss";
import { GetLang } from "./Languages";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="content">{children}</div>
      <footer>{GetLang()} Made by Princzes Barnabás</footer>
    </div>
  );
}
