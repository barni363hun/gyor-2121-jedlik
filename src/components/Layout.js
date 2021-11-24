import React, { useState } from "react";
import NavBar from "../components/Navbar";
import "../styles/global.scss";

export default function Layout({ children }) {
  const [lang, setLang] = useState("en");

  function setLanguage(lang) {
    setLang(lang);
  }

  return (
    <div>
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
}
