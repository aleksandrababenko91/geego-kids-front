"use client";

import styles from "./ChallengesCard.module.scss";
import useStateModal from '@/state/stateModalTaskGroups';
import Image from "next/image";

const ChallengesCard = ({ data }) => {
  const { imageUrl, name, subCategory } = data;
  const open = useStateModal((state) => state.open);

  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image src={imageUrl} fill sizes="100%" alt="icon koulu" />
      </div>
      <div className={styles.content}>
        <button
          type="button"
          className={styles.title}
          onClick={() => open(subCategory)} // Pass subCategory data to modal state
        >
          <span>{name}</span>
        </button>
      </div>
    </article>
  );
};

export default ChallengesCard;
