import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Menu />
        <LanguageBtn />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;