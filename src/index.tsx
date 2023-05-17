import React from "react";
import ReactDOM from "react-dom/client";
import { ReactComponent as IconInstagram } from "./assets/svg/icon_instagram.svg";
import { ReactComponent as IconTelegram } from "./assets/svg/icon_telegram.svg";
import "./index.css";
import "./footer.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <main className="main">
    <h2 className="subtitle">Hi, I'm</h2>
    <h1 className="title">Dmitriy Shkredov</h1>
    <p className="description">Web Developer</p>
    <footer className="footer">
      <a
        href="https://www.instagram.com/regular_web_developer/"
        className="footer__link"
        target="_blank"
        rel="noreferrer"
      >
        <IconInstagram />
      </a>
      <a
        href="https://t.me/dmitriy_shkredov"
        className="footer__link"
        target="_blank"
        rel="noreferrer"
      >
        <IconTelegram />
      </a>
    </footer>
  </main>
);
