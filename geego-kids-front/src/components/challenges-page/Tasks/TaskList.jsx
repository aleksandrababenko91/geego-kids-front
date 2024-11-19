"use client";

// src/components/challenges-page/Tasks/TaskList.jsx

import TaskCard from './TaskCard';
import styles from './TaskList.module.scss';
import ModalVideo from '@/components/modals/ModalVideo/ModalVideo';

export default function TaskList({ tasks }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Tasks</h1>
      <ul className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.taskName}>
              <TaskCard task={task} />
            </li>
          ))
        ) : (
          <p>No tasks found for this subcategory.</p>
        )}
      </ul>
      <ModalVideo />
    </div>
  );
}
