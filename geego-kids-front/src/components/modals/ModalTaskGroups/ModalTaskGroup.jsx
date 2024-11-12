"use client";

import stateModalTaskGroups from "../../../state/stateModalTaskGroups";
import { useBodyLock } from '@/lib/hooks/useBodyLock';
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from "../LayoutModal/LayoutModal";
import TaskCard from './TasksContainer/TaskCard/TaskCard';
import styles from './ModalTaskGroup.module.scss';
import {createKey} from '../../../lib/createKey';

const ModalTaskGroup = () => {
  // Get modal state
  const isOpen = stateModalTaskGroups((state) => state.isOpen);
  const onClose = stateModalTaskGroups((state) => state.close);
  const subCategoryData = stateModalTaskGroups((state) => state.subCategory); // get subCategory

  useBodyLock(isOpen);

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper}>
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseBtn className={styles.closeButton} onClick={onClose} />
          {/* Pass subCategory data to TaskCard */}
          <div className={styles.tasksContainer}>
            {subCategoryData && subCategoryData.map((item) => (
              <TaskCard key={createKey} item={item} />
            ))}
          </div>
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalTaskGroup;
