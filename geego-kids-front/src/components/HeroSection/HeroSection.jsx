import AnimatedVideo from './AnimatedVideo';
import styles from './HeroSection.module.scss';
import Slogan from './Slogan';

export default function Home() {
  return (
    <section className={styles.section}>
      <AnimatedVideo/>
      <Slogan />
    </section>
  );
}