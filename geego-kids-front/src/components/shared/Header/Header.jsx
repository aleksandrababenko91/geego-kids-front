import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from '../Logo/Logo';
import ButtonUlos from '../ButtonUlos/ButtonUlos';
import { useTranslations } from 'next-intl';


const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo variant="header" className={styles.logo} />
        <Menu />
        <ButtonUlos className={styles.headerBtn}>
          {t("btn")}
        </ButtonUlos>
        <LanguageBtn  />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;