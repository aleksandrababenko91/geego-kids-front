"use client";

import styles from './SubCategoryCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const SubCategoryCard = ({ name, sub }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={sub.imageDesc}
        width={sub.width}
        height={sub.height}
        alt={sub.subName}
        className={styles.iconWrapper}
      />
      <div>
        <h2 className={styles.header}>{sub.subName}</h2>
        <Link href={`/geegocity/${name}/${sub.subName}`}>
          <h1>Перейти к задачам</h1>
        </Link>
      </div>
    </div>
  );
};

export default SubCategoryCard;
