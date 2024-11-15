"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './TaskCard.module.scss';

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <Link href={`/task/${task.taskName}`}>
        <Image
          src={task.imageTask}
          width={task.width}
          height={task.height}
          alt={task.taskName}
          className={styles.image}
        />
        <p className={styles.name}>{task.taskName}</p>
      </Link>
    </div>
  );
};

export default TaskCard;
