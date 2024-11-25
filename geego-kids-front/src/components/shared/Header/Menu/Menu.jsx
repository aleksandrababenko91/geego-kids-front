import MainLink from "../../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./Menu.module.scss";
import { createKey } from '../../../../lib/createKey';
import { useTranslations } from 'next-intl';

const Menu = () => {
  const t = useTranslations("Header");

  return (
    <ul className={styles.menu}>
      {navigationLinks.map(({ url, name, type }) => (
        <li key={createKey()}>
          <MainLink url={url} type={type} name={t(name)}>
            {t(name)}
          </MainLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;