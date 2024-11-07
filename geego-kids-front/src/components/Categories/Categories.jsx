import styles from './Categories.module.scss';
import CategoriesCard from './CategoriesCard/CategoriesCard';
import { items} from './items';
import { createKey } from '@/lib/createKey';

const Categories = () => {
  return (
    <section className={styles.roleSection}>
      <div className={styles.container}>
        <div className={styles.content}>
        {items.map((item) => {
          const cardKey = createKey();
          return (
            <CategoriesCard 
              key={cardKey}
              image={item.image}
              title={item.title}
              description={item.description}
              cardBackground={item.cardBackground}
              url={item.url}
            />
            
          );
        })}
        {}
        </div>
      </div>
    </section>
  );
}


export default Categories;