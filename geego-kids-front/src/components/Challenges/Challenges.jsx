import styles from './Challenges.module.scss';
import ChallengesCard from './ChallengesCard/ChallengesCard';
import { items} from './items';
import { createKey } from '@/lib/createKey';

const Challenges = () => {
  return (
    <section className={styles.roleSection}>
      <div className={styles.container}>
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
      </div>
    </section>
  );
}


export default Challenges;