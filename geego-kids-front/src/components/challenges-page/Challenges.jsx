"use client";

import { useState } from "react";
import ChallengesCard from './ChallengesCard';
import { categories } from "./items";
import { createKey } from '@/lib/createKey';
import styles from "./Challenges.module.scss";
import InputSearch from '@/components/shared/InputField/InputSearch';
import LoadMore from '@/components/shared/LoadMore/LoadMore';
import ModalTaskGroup from '@/components/modals/ModalTaskGroups/ModalTaskGroup';

const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // initial visible count


  // Filter categories based on search query
  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };


  return (
    <section className={styles.section}>
      <div className={styles.challengesContainer}>
        <h1 className={styles.title}>GEEGOCITY</h1>
        <InputSearch
          className={styles.search}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className={styles.content}>
          {filteredCategories.length > 0 ? (
            filteredCategories.slice(0, visibleCount).map((data) => (
              <ChallengesCard key={createKey()} data={data} />
            ))
          ) : (
            <p>No challenges found.</p>
          )}
        </div>
        <LoadMore onClick={handleLoadMore} />
        <ModalTaskGroup /> 
      </div>
    </section>
  );
};

export default Challenges;
