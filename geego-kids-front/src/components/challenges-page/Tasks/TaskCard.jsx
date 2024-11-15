"use client";

import Image from "next/image";
import styles from "./TaskCard.module.scss";
import stateModalSubCategoryGroup from "../../../state/stateModalSubCategoryGroup";

const TaskCard = ({ task }) => {
  const openModal = stateModalSubCategoryGroup((state) => state.open);
  const setSelectedData = stateModalSubCategoryGroup((state) => state.setSelectedData);

  const handleCardClick = () => {
    if (task.taskVideo) {
      setSelectedData(task); 
      openModal(); 
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <Image
        src={task.imageTask}
        width={task.width}
        height={task.height}
        alt={task.taskName}
        className={styles.image}
      />
      <p className={styles.name}>{task.taskName}</p>
    </div>
  );
};

export default TaskCard;
