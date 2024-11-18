"use client";

import stateModalSubCategoryGroup from "../../../state/stateModalSubCategoryGroup";
import { useBodyLock } from '@/lib/hooks/useBodyLock';
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from "../../modals/LayoutModal/LayoutModal";
import styles from './ModalVideo.module.scss';

const ModalVideo = () => {
  const isOpen = stateModalSubCategoryGroup((state) => state.isOpen);
  const onClose = stateModalSubCategoryGroup((state) => state.close);
  const selectedData = stateModalSubCategoryGroup((state) => state.selectedData); //  recieved choosen data

  useBodyLock(isOpen);
  if (!selectedData || !selectedData.taskVideo) return null; // Отображаем модалку только с видео

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <CloseBtn className={styles.closeButton} onClick={onClose} />
          <h1 className={styles.title}>{selectedData.taskName}</h1>
          <video
            className={styles.video}
            src={selectedData.taskVideo}
            controls
            autoPlay
          />
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalVideo;
