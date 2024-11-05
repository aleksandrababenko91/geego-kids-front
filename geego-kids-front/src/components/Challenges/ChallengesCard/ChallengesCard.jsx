
import styles from './ChallengesCard.module.scss';
import Image from "next/image";

const ChallengesCard = ({ image, title, description }) => {
  return (
    <article className={styles.article}>
      <div className={styles.imageContainer}>
        <Image
          width={120}
          height={120}
          alt={title}
          src={image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.shortDesc}>{description}</p>
      </div>
    </article>
  );
};

export default ChallengesCard;