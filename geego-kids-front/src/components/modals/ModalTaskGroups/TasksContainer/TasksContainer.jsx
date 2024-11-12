"use client";

import styles from './TaskCard.module.scss';
import MainLink from '@/components/shared/MainLink/MainLink';
import Image from 'next/image';

const TaskCard = ({ item }) => {
  const { name, imageUrl, subCategory } = item;

  return (
    <div className={styles.cardStyle}>
      <div className={styles.cardWrapper}>
        <Image
          className={styles.svgWrapper}
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.textCard}>
        <MainLink className={styles.header} url={item.url} openInNewTab={true}>
          <h3>{name}ghhghghghgh</h3>
        </MainLink>
        <p className={styles.text}>{name}jgjgjfgjfjfkfkkf</p>
kdkkdkdkdk
        <div className={styles.subCategoryContainer}>
          {subCategory.map((sub, index) => (
            <div key={index} className={styles.subCategoryItem}>
              <Image src={sub.imageDesc} alt={sub.name} width={50} height={50} />
              <p>{sub.name}hghghghghghh</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
