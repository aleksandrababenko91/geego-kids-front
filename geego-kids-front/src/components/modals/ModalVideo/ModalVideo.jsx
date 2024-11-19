"use client";


import stateVideoModal from "../../../state/stateVideoModal";
import { useBodyLock } from '@/lib/hooks/useBodyLock'; // Блокировка прокрутки
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from "../../modals/LayoutModal/LayoutModal";
import styles from './ModalVideo.module.scss';

const ModalVideo = () => {
  const isOpen = stateVideoModal((state) => state.isOpen); // Получаем состояние для модалки
  const onClose = stateVideoModal((state) => state.close); // Получаем функцию для закрытия модалки
  const selectedTask = stateVideoModal((state) => state.selectedTask); // Получаем выбранные данные

  useBodyLock(isOpen); // Блокировка прокрутки при открытой модалке

  // Если нет выбранной задачи или видео, то не показываем модалку
  if (!selectedTask || !selectedTask.taskVideo) return null;

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <CloseBtn className={styles.closeButton} onClick={onClose} />
          <h1 className={styles.title}>{selectedTask.taskName}</h1>
          <video
            className={styles.video}
            src={selectedTask.taskVideo}
            controls
            autoPlay
          />
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalVideo;
