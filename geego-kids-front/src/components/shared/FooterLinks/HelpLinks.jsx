"use client";

import React from "react";
import { helpLinks } from "./constants";
import styles from "./HelpLinks.module.scss";
import { createKey } from "../../../lib/createKey";
import MainLink from "../MainLink/MainLink";
import stateModalPdf from '@/state/stateModalPdf';

const HelpLinks = () => {
  const open = stateModalPdf(state => state.open);


  return (
    <div className={styles.helpList}>
      {helpLinks.map(({ url, name, type }) => (
        <MainLink
          url={url}
          key={createKey()}
          type={type}
          onClick={() => open(url)}

        >
          {(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default HelpLinks;