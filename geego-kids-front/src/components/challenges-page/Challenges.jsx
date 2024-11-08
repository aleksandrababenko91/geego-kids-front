"use client";

import { useState } from "react";
import ChallengesCard from './ChallengesCard';
import { categories } from "./items";
import { createKey } from '@/lib/createKey';
import styles from "./Challenges.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';

const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtred categories in real time
  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  return (
    <section className={styles.section}>
      <div className={styles.challengesContainer}>
        <h1 className={styles.title}>GEEGOCITY</h1>
        <InputSearch
          className={styles.search}
          onChange={(e) => setSearchQuery(e.target.value)} // direct updating when get input
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className={styles.content}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((data) => (
              <ChallengesCard key={createKey()} data={data} />
            ))
          ) : (
            <p>No challenges found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
