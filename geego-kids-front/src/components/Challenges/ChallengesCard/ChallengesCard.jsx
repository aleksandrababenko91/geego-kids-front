"use client";
import styles from './ChallengesCard.module.scss';
import Image from "next/image";

const  ChallengesCard = ({ image, title, description }) => {

  
  return (
    <article className={styles.article}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            sizes="100%"
            fill
            alt={title}
            src={imgSrc}
            />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.shortDesc}>{description}</p>
        <button onClick={() => setReadMore(true)} className={styles.readMore}>
          {("card_link")}
        </button>
      </div>
    </article>
  );
};


export default ChallengesCard;