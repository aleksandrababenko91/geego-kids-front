import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from '../Logo/Logo';
import ButtonUlos from '../ButtonUlos/ButtonUlos';


const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo variant="header" className={styles.logo} />
        <Menu />
        <ButtonUlos className={styles.headerBtn}>Kirjaudu Ulos</ButtonUlos>
        <LanguageBtn  />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;