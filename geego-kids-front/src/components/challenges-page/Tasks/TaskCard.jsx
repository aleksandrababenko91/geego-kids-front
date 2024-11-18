"use client";

import Image from "next/image";
import styles from "./TaskCard.module.scss";
import useStateModal from '@/state/stateModalSubCategoryGroup';


const TaskCard = ({ task }) => {
  const open = useStateModal((state) => state.open);
  const setSelectedData = useStateModal((state) => state.setSelectedData);

  const handleClick = () => {
    if (task.taskVideo) {
      setSelectedData(task); 
      open(); 
      console.log("open ModalkaVideo?");
      
    }
  };

  return (
    <div className={styles.card} onClick={handleClick}>
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
