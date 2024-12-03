import Header from '../../shared/Header/Header';
import styles from './LayoutLogin.module.scss';

export default function LayoutLogin({children}) {
  return (
    <div className={styles.page}>
      <Header />
      {children}
    </div>
  )
}