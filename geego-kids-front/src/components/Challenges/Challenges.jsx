

import styles from './Challenges.module.scss';
import ChallengesCard from './ChallengesCard/ChallengesCard';
import{ items} from './items';
import { createKey } from '@/lib/createKey';

const Challenges = () => {
  return (
    <section className={styles.roleSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Title</h2>
        <div className={styles.content}>
        {items.map((item) => {
          const cardKey = createKey();
          return (
            <ChallengesCard 
              key={cardKey}
              image={item.image}
              title={item.title}
              description={item.description}
              cardBackground={item.cardBackground}
            />
          );
        })}
        </div>
        <button type="partaker">
            Button
        </button>
      </div>
    </section>
  );
}


export default Challenges;