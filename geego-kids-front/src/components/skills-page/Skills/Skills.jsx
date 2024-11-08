"use client";

import { useState } from "react";
import SkillCard from './SkillCard';
import { categories } from "./items";
import { createKey } from '@/lib/createKey';
import styles from "./Skills.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtred categories in real time
  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  return (
    <section className={styles.section}>
      <div className={styles.SkillsContainer}>
        <h1 className={styles.title}>SPORTTIPARKKI</h1>
        <InputSearch
          className={styles.search}
          onChange={(e) => setSearchQuery(e.target.value)} // direct updating when get input
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className={styles.content}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((data) => (
              <SkillCard key={createKey()} data={data} />
            ))
          ) : (
            <p>No Skills found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
