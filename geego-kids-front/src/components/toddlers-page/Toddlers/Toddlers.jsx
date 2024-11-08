"use client";

import { useState } from "react";
import ToddlerCard from './ToddlerCard';
import { categories } from "./items";
import { createKey } from '@/lib/createKey';
import styles from "./Toddlers.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';

const Toddlers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtred categories in real time
  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  return (
    <section className={styles.section}>
      <div className={styles.ToddlersContainer}>
        <h1 className={styles.title}>TODDLERS</h1>
        <InputSearch
          className={styles.search}
          onChange={(e) => setSearchQuery(e.target.value)} // direct updating when get input
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className={styles.content}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((data) => (
              <ToddlerCard key={createKey()} data={data} />
            ))
          ) : (
            <p>No Toddlers found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Toddlers;
