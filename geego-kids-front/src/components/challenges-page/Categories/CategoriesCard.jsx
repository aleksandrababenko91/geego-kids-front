"use client";

import styles from "./CategoriesCard.module.scss";
import useStateModal from '@/state/stateModalSubCategoryGroup';
import Image from "next/image";

const CategoriesCard = ({ data }) => {
  const { imageUrl, name } = data;
  const open = useStateModal((state) => state.open);
  const setSelectedData = useStateModal((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(data);
    open();
    console.log("Selected category data:", data);
  };
  

  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image src={imageUrl} fill sizes="100%" alt="icon main" />
      </div>
      <div className={styles.content}>
        <button type="button" className={styles.title} onClick={handleClick}>
          <span>{name}</span>
        </button>
      </div>
    </article>
  );
};

export default CategoriesCard;
