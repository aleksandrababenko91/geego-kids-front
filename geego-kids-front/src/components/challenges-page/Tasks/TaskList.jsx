"use client";

import { categories } from '../items';
import styles from './TaskList.module.scss';
import { createKey } from '../../../lib/createKey';
import TaskCard from './TaskCard';
import ModalVideo from '../../modals/ModalVideo/ModalVideo';

export default function TaskList() {
  const tasks = categories.flatMap((category) =>
    category.subCategory.flatMap((subCategory) => subCategory.task || [])
  );

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>SubCategoryName</h1>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={createKey()}>
            <TaskCard key={createKey()} task={task} />
          </li>
        ))}
        <ModalVideo />
        </ul>
    </div>
  );
}
