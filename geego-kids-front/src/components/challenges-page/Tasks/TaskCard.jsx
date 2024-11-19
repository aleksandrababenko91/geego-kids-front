"use client";

import Image from "next/image";
import styles from "./TaskCard.module.scss";
import stateVideoModal from '@/state/stateVideoModal'; // Импортируем состояние модалки

const TaskCard = ({ task }) => {
  const openModal = stateVideoModal((state) => state.open); // Получаем функцию для открытия модалки
  const setSelectedTask = stateVideoModal((state) => state.setSelectedTask); // Получаем функцию для установки выбранной задачи

  const handleCardClick = () => {
    if (task.taskVideo) {
      setSelectedTask(task); // Устанавливаем данные выбранной задачи
      openModal(); // Открываем модалку
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
