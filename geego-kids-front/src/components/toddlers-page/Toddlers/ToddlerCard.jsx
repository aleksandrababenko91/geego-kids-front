"use client";

import React, { useCallback } from "react";
import styles from "./toddlerCard.module.scss";
import Image from "next/image";


const ToddlerCard = ({ data }) => {
  const { imageUrl, name} = data;


  const handleClose = useCallback(() => {
    setIsTeamShowed((state) => !state);
  }, []);

  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image src={imageUrl} fill sizes="100%" alt="icon koulu" />
      </div>
      <div className={styles.content}>
        <button onClick={handleClose} type="button" className={styles.title}>
          <span>{name}</span>
        </button>
      </div>
    </article>
  );
};

export default ToddlerCard;