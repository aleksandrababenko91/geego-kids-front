// ModalTaskGroup.js

"use client";

import stateModalTaskGroups from "../../../state/stateModalTaskGroups";
import { useBodyLock } from '@/lib/hooks/useBodyLock';
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from "../LayoutModal/LayoutModal";
import Image from "next/image";
import styles from './ModalTaskGroup.module.scss';

const ModalTaskGroup = () => {
  const isOpen = stateModalTaskGroups((state) => state.isOpen);
  const onClose = stateModalTaskGroups((state) => state.close);
  const selectedData = stateModalTaskGroups((state) => state.selectedData); // получаем выбранные данные

  useBodyLock(isOpen);

  if (!selectedData) return null;

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <CloseBtn className={styles.closeButton} onClick={onClose} />
          
          <h1>{selectedData.name}</h1>
          {selectedData.subCategory && selectedData.subCategory.length > 0 && (
            <div className={styles.subCategoriesContainer}>
              {selectedData.subCategory.map((sub, index) => (
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
      </div>
    </LayoutModal>
  );
};

export default ModalTaskGroup;
