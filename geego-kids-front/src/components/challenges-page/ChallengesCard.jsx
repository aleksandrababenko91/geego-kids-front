"use client";

import React, { useCallback } from "react";
import styles from "./ChallengesCard.module.scss";
import Image from "next/image";


const ProjectCard = ({ data }) => {
  const { imageUrl} = data;


  const handleClose = useCallback(() => {
    setIsTeamShowed((state) => !state);
  }, []);

  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image src={imageUrl} fill sizes="100%" alt="icon koulu" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>GeegoCityCategory Name</h3>
        <button onClick={handleClose} type="button" className={styles.button}>
          <span>Click To Open</span>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;