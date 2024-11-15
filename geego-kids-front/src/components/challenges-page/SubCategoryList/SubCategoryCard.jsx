"use client";

import styles from './SubCategoryCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
// import MainLink from '@/components/shared/MainLink/MainLink';
// import linkTypes from '@/components/shared/MainLink/constants';


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

        <Link href={`/geegocity/${name}/${sub.subName}`} >
        <h2 className={styles.header}>{sub.subName}</h2>
        </Link>

    </div>
  );
};

export default SubCategoryCard;
