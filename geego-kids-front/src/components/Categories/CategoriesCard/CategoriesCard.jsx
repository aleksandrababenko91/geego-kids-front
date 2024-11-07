import Link from 'next/link';
import styles from './CategoriesCard.module.scss';
import Image from "next/image";


const CategoriesCard = ({ image, title, description, cardBackground, url }) => {
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
        <Link href={url} >
          <h3 className={styles.heading}>{title} 
            <Image
              src="/images/arrow.svg" 
              alt="Arrow Icon"
              width={30} 
              height={30}
              className={styles.arrowIcon}
            />
          </h3>
        </Link>
        <p className={styles.shortDesc}>{description}</p>
      </div>
    </article>
  );
};

export default CategoriesCard;

