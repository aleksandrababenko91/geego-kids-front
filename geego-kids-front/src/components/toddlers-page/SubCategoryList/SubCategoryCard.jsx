"use client";

import Link from 'next/link';
import styles from './SubCategoryCard.module.scss';
import Image from 'next/image';

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
    <Link href={`/geegocity/${encodeURIComponent(name)}/${encodeURIComponent(sub.subName)}`}>
      <h2 className={styles.header}>{sub.subName}</h2>
    </Link>

    </div>
  );
};

export default SubCategoryCard;
