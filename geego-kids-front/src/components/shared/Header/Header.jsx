import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from '../Logo/Logo';
import { useRouter } from "@/navigation"
import MainButton from "../MainButton/MainButton";
import LogOut from '../../../components/login-page/LogOut';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo variant="header" className={styles.logo} />
        <Menu />
        {/* <MainButton 
          onClick={handleClick}
          className={styles.headerBtn}>
          {t("btn")}
        </MainButton> */}
        <LogOut/>
        <LanguageBtn  />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;