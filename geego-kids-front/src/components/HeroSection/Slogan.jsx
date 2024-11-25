import styles from './HeroSection.module.scss';
import { useTranslations } from 'next-intl';

const Slogan= () => {
  const t = useTranslations("Hero");

  return (
    <div className={styles.textContainer}>
        <h1>{t("logo")}</h1>
    </div>
  );
};
export default Slogan;

