import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as IconInstagram } from "../assets/svg/icon_instagram.svg";
import { ReactComponent as IconTelegram } from "../assets/svg/icon_telegram.svg";
import "./index.css";
import "./header.css";
import "./footer.css";

export const Main = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className={classNames("main", theme)}>
      <header className="header">
        <button
          className={classNames("theme-button", theme)}
          onClick={changeTheme}
        ></button>
      </header>
      <h2 className={classNames("subtitle", theme)}>Hi, I'm</h2>
      <h1 className={classNames("title", theme)}>Dmitriy Shkredov</h1>
      <p className={classNames("description", theme)}>Web Developer</p>
      <footer className="footer">
        <a
          href="https://www.instagram.com/regular_web_developer/"
          className={classNames("footer__link", theme)}
          target="_blank"
          rel="noreferrer"
        >
          <IconInstagram />
        </a>
        <a
          href="https://t.me/dmitriy_shkredov"
          className={classNames("footer__link", theme)}
          target="_blank"
          rel="noreferrer"
        >
          <IconTelegram />
        </a>
      </footer>
    </main>
  );
};
