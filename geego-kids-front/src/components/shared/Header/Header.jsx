import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from '../Logo/Logo';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo variant="header" className={styles.logo} />
        <Menu />
        <LanguageBtn />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;