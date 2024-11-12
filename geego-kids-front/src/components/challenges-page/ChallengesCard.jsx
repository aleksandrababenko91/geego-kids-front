// ChallengesCard.js

"use client";

import styles from "./ChallengesCard.module.scss";
import useStateModal from '@/state/stateModalTaskGroups';
import Image from "next/image";

const ChallengesCard = ({ data }) => {
  const { imageUrl, name, subCategory } = data;
  const open = useStateModal((state) => state.open);
  const setSelectedData = useStateModal((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(data); // установите выбранные данные
    open(); // откройте модальное окно
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

        {/* Рендеринг подкатегорий */}
        {subCategory && subCategory.length > 0 && (
          <div className={styles.subCategoriesContainer}>
            {subCategory.map((sub, index) => (
              <div key={index} className={styles.subCategoryItem}>
                <Image
                  src={sub.imageDesc}
                  width={50}
                  height={50}
                  alt={sub.subName}
                  className={styles.subCategoryImage}
                />
                <span className={styles.subCategoryName}>{sub.subName}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ChallengesCard;
