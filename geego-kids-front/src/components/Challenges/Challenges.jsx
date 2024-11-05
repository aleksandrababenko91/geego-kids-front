"use client";

import styles from './Challenges.module.scss';
import ChallengesCard from './ChallengesCard/ChallengesCard';
import { items } from './items';
import { createKey } from '@/lib/createKey';




const Challenges = () => {

  return (
    <section className={styles.roleSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Title</h2>
          <div className={styles.content}>
            {items.map((item) => (
              <ChallengesCard
                key={createKey()}
                title={item.title}
                imgSrc={item.image}
                description={item.description}
              />
            ))}
          </div>
        <button type="partaker">
              Button
        </button>
      </div>
    </section>
  );
}


export default Challenges;