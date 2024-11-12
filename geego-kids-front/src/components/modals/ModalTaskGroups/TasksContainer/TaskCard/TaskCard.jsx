import styles from './TaskCard.module.scss';
import MainLink from '@/components/shared/MainLink/MainLink';
import Image from 'next/image';

const TaskCard = ({ item }) => {
  const { name, imageUrl, subCategory } = item;

  const handleClick = (e) => {
    e.preventDefault();
    open(item.url === "https://baza-poligon.com.ua");
  };

  return (
    <div className={styles.cardStyle}>
      <div className={styles.cardWrapper}>
        <div className={styles.ellipseWrapper}></div>
        <Image
          className={styles.svgWrapper}
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.textCard}>
        <MainLink
          className={styles.header}
          url={item.url}
          openInNewTab={true}
          type={item.type}
          onClick={handleClick}
        >
          <h3>{name}</h3>
        </MainLink>
        <p className={styles.text}>{name}</p>

        <div className={styles.subCategoryContainer}>
          {subCategory.map((sub, index) => (
            <div key={index} className={styles.subCategoryItem}>
              <Image
                src={sub.imageDesc}
                alt={sub.name}
                width={50}
                height={50}
              />
              <p>{sub.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
