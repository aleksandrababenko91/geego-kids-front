"use client";

import { categories } from './items';
import styles from './TaskList.module.scss';

const TaskListPage = ({ params }) => {
  const { category, subcategory } = params;

  // Находим нужную категорию и подкатегорию
  const selectedCategory = categories.find(cat => cat.name === category);
  const selectedSubcategory = selectedCategory?.subcategories.find(sub => sub.name === subcategory);

  // Получаем список задач из выбранной подкатегории
  const tasks = selectedSubcategory?.tasks || [];

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Tasks for subCategories: {subcategory}</h1>
      <div className={styles.list}>
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task, index) => (
              <li key={index}>
                <a href={`/${category}/${subcategory}/${task.name}`}>
                  {task.title}
                </a>
              </li>
            ))}
          </div>
        ) : (
          <p>There will be tasks foe SubCategories.</p>
        )}
    </div>
    </div>
  );
};

export default TaskListPage;
