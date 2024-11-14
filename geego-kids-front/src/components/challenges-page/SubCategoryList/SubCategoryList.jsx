"use client";

import styles from './SubCategoryList.module.scss';
import Image from 'next/image';
import { createKey } from '../../../lib/createKey';
import Link from 'next/link';

const SubCategoryList = ({ name, subCategory }) => {
  return (
    <div className={styles.card}>
      {subCategory && subCategory.length > 0 &&
        subCategory.map((sub) => (
          <div className={styles.cardContainer} key={createKey()}>
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
        ))
      }
    </div>
  );
};

export default SubCategoryList;
