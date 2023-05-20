import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as IconInstagram } from "../../assets/svg/icon_instagram.svg";
import { ReactComponent as IconTelegram } from "../../assets/svg/icon_telegram.svg";
import { ReactComponent as IconYoutube } from "../../assets/svg/icon_youtube.svg";
import { ReactComponent as IconRutube } from "../../assets/svg/icon_rutube.svg";
import "./main.css";

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
          href="https://www.youtube.com/channel/UCrhB54dW2km5MfFGNogNrlw"
          className={classNames("footer__link footer__link--youtube", theme)}
          target="_blank"
          rel="noreferrer"
        >
          <IconYoutube />
        </a>
        <a
          href="https://rutube.ru/channel/31171170/"
          className={classNames("footer__link footer__link--rutube", theme)}
          target="_blank"
          rel="noreferrer"
        >
          <IconRutube />
        </a>

        {/* <a
          href="https://t.me/dmitriy_shkredov"
          className={classNames("footer__link", theme)}
          target="_blank"
          rel="noreferrer"
        >
          <IconTelegram />
        </a> */}
      </footer>
    </main>
  );
};
