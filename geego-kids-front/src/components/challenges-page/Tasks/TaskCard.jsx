"use client";

import Image from "next/image";
import styles from "./TaskCard.module.scss";
import stateVideoModal from '@/state/stateVideoModal';

const TaskCard = ({ task }) => {
  const openModal = stateVideoModal((state) => state.open); // Function for open Modalka
  const setSelectedTask = stateVideoModal((state) => state.setSelectedTask); // Function to install 

  const handleCardClick = () => {
    if (task.taskVideo) {
      setSelectedTask(task); 
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