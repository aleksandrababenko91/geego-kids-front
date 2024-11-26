import styles from "./PageNotFound.module.scss";
import { useTranslations } from "next-intl";
import MainLink from '../shared/MainLink/MainLink';

export const PageNotFound = () => {
  const t = useTranslations("NFP_404");
  return (
    <main className={styles.mainErr}>
      <div className={styles.wrapper}>
        <h1 className={styles.numbers}>404</h1>
        <p>{t('title')}</p>
        <MainLink url="/">
        {t('btn_home')}
        </MainLink>
      </div>
    </main>
  );
};