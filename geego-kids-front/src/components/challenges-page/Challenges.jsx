import React from "react";
import ChallengesCard from './ChallengesCard';
import { categories } from "./items";
import { createKey } from '@/lib/createKey';
import styles from "./Challenges.module.scss";
import InputField from "../shared/InputField/InputField";

const Challenges = () => {
  return (
    <section className={styles.section}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.title}>GEEGOCITY</h1>
        <InputField version={"input"} />
        <div className={styles.content}>
          {categories.map((data) => (
            <ChallengesCard key={createKey()} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;