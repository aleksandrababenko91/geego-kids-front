"use client";

import styles from './SubCategoryList.module.scss';
import Image from 'next/image';
import { createKey } from '../../../lib/createKey';

const SubCategoryList = ({ subCategory }) => {
  return (
    <div className={styles.card}>
        {subCategory && subCategory.length > 0 && 
          subCategory.map((sub) => (
            <div className={styles.cardContainer} 
              key={createKey()}>
              <Image
                src={sub.imageDesc}
                width={sub.width}
                height={sub.height}
                alt={sub.subName}
                className={styles.iconWrapper}
              />
              <div >
                <h2 className={styles.header}>{sub.subName}</h2>
              </div>
            </div>
          ))
        }
    </div>
  );
};

export default SubCategoryList;
