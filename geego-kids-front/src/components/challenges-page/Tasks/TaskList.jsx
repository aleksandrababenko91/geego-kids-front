"use client";

import TaskCard from './TaskCard';
import styles from './TaskList.module.scss';
import ModalVideo from '@/components/modals/ModalVideo/ModalVideo';
import { createKey } from '@/lib/createKey';

export default function TaskList({ tasks, subName }) {
  
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{subName}</h1>
      <ul className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={createKey()}>
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