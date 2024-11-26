"use client";

import stateModalSubCategoryGroup from "../../../state/stateModalSubCategoryGroup";
import { useBodyLock } from '@/lib/hooks/useBodyLock';
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from "../LayoutModal/LayoutModal";
import styles from './ModalSubCategoryToddlers.module.scss';
import SubCategoryList from '@/components/toddlers-page/SubCategoryList/SubCategoryList';

const ModalSubCategoryToddlers = () => {
  const isOpen = stateModalSubCategoryGroup((state) => state.isOpen);
  const onClose = stateModalSubCategoryGroup((state) => state.close);
  const selectedData = stateModalSubCategoryGroup((state) => state.selectedData); //  recieved choosen data

  useBodyLock(isOpen);

  if (!selectedData) return null;

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <CloseBtn className={styles.closeButton} onClick={onClose} />
          <h1 className={styles.title}>{selectedData.name}</h1>
          <SubCategoryList
            name={selectedData.name}
            subCategory={selectedData.subCategory}
          />
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalSubCategoryToddlers;
