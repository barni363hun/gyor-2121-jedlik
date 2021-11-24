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
      <NavBar Lang={lang} setLang={setLanguage()} />
      <div Lang={lang} className="content">
        {children}
      </div>
      <footer>{lang} Made by Princzes Barnabás</footer>
    </div>
  );
}
