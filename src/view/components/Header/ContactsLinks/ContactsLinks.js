import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./ContactsLinks.css";

const navItems = () => {
  return (
    <ul className={classes.ContactsList}>
      <li className={classes.ContactsItem}>
        <a
          className={classes.ContactLink}
          href="https://www.linkedin.com/in/%D1%82%D0%B0%D1%80%D0%B0%D1%81-%D0%BA%D0%BE%D0%B7%D1%83%D0%B1%D0%BE%D0%B2-986b2116a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </a>
      </li>
      <li>
        <a
          className={classes.ContactLink}
          href="https://github.com/Tarasuz"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </a>
      </li>
    </ul>
  );
};

export default navItems;
