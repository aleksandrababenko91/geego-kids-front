import styles from '../LoadMore/LoadMore.module.scss';
import MainButton from '../MainButton/MainButton';

const LoadMore = ({onClick}) => {
  return(
    <MainButton
    onClick={onClick}
    className={styles.btn}
    type="button"
  >
    Load more
    </MainButton>
  );
};

export default LoadMore;