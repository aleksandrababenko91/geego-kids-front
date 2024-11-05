import styles from './ChallengesCard.module.scss';
import Image from "next/image";

const ChallengesCard = ({ image, title, description, cardBackground }) => {
  return (
    <article className={styles.article} style={{background: cardBackground}}>
      <div className={styles.imageContainer}  >
        <Image
          width={250}
          height={230}
          alt={title}
          src={image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.heading}>{title} 
        <button type="button" className={styles.button}>
          <Image
            src="/images/arrow.svg" 
            alt="Arrow Icon"
            width={30} 
            height={30}
            className={styles.arrowIcon}
          />
        </button>
        </h3>
        <p className={styles.shortDesc}>{description}</p>
      </div>
    </article>
  );
};

export default ChallengesCard;

