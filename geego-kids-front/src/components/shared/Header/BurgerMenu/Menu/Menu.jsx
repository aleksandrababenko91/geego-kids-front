import MainLink from "../../../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./Menu.module.scss";
import { createKey } from '../../../../../lib/createKey'

const Menu = () => {

  return (
    <ul className={styles.menu}>
      {navigationLinks.map(({ url, name, type }) => (
        <li key={createKey()}>
          <MainLink url={url} type={type} name={name}>
            {(name)}
          </MainLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;