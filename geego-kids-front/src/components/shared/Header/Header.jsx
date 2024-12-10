import LanguageBtn from "@/components/shared/LanguageBtn/LanguageBtn";
import Menu from "./Menu/Menu";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from '../Logo/Logo';
import { useRouter } from "@/navigation"
import { useTranslations } from 'next-intl';
import MainButton from "../MainButton/MainButton";

const Header = () => {
  const router = useRouter();
  const url='/login';
  const handleClick=()=>{
    router.push(url)
  }
   const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo variant="header" className={styles.logo} />
        <Menu />
        <MainButton 
          onClick={handleClick}
          className={styles.headerBtn}>
          {t("btn")}
        </MainButton>
        <LanguageBtn  />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;