"use client";

import styles from './SubCategoryList.module.scss';
import { createKey } from '../../../lib/createKey';
import SubCategoryCard from './SubCategoryCard';


const SubCategoryList = ({ name, subCategory = [] }) => {
  return (
    <div className={styles.card}>
      {subCategory && subCategory.length > 0 &&
        subCategory.map((sub) => (
          <SubCategoryCard key={createKey()} name={name} sub={sub} />
        ))
      }

    </div>
  );
};

export default SubCategoryList;
