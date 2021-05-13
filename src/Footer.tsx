import * as React from "react";

import { footer, link, linkList, linksHeading1 } from "./Footer.css";

export function Footer() {
  return (
    <footer className={footer}>
      <h2 className={linksHeading1}>Links</h2>
      <ul className={linkList}>
        <li>
          <a href="https://swc.rs/" className={link}>
            SWC project
          </a>
        </li>
        <li>
          <a href="https://github.com/swc-project/swc" className={link}>
            SWC project GitHub repo
          </a>
        </li>
        <li>
          <a
            href="https://github.com/luke-john/swc-playground"
            className={link}
          >
            Playground GitHub repo
          </a>
        </li>
      </ul>
    </footer>
  );
}
