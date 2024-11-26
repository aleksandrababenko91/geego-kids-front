import styles from './Loader.module.scss';

export default function Loader() {
  return  (
    <div className={styles.wrapper}>Looading
      <span className={styles.loader}>Loading</span>
    </div>
  )
}